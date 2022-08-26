import React, {useCallback, useEffect, useState} from 'react';
import styles from './App.module.css';
import CatCard from "./components/CatCard";
import FilterBar from "./components/FilterBar";
import CatService, {IFilterQueryProps} from "./services/CatService";
import {debounce} from 'lodash';
import {Buffer} from 'buffer';

function App() {
    const [imageSource, setImageSource] = useState<string>('');
    const [filter, setFilter] = useState<IFilterQueryProps>();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [serverError, setServerError] = useState<boolean>(false);

    const debounceTime = 1000;

    const summonCat = useCallback(
        debounce(async (filter: IFilterQueryProps) => {
            let catBuffer;

            try {
                catBuffer = await CatService.getBufferCat(filter);
                const base64ImageString = Buffer.from(catBuffer as any , 'binary').toString('base64')
                setImageSource(`data:image/jpeg;base64,${base64ImageString}`)
            }
            catch(e) {
                setServerError(true);
            }
            finally {
                setIsLoading(false)
            }
        }, debounceTime),
        []
    );

    useEffect(() => {
        if (filter) {
            setIsLoading(true);
            setServerError(false);

            summonCat(filter);
        }
    }, [filter]);

    return (
        <div className={styles.App}>
            <div className={styles.container}>
                <div className={styles['filter-container']}>
                    <FilterBar onChangeFilter={setFilter}/>
                </div>

                {
                    !serverError ?
                        isLoading ?
                            <p>Loading...</p>
                            :
                            (
                                filter?.searchValue ?
                                    <CatCard name={filter?.searchValue} imageSource={imageSource}/>
                                    :
                                    <p>
                                        Use form to generate a cat
                                    </p>
                            )
                        :
                        <p>
                            Cat could not be generated
                        </p>
                }
            </div>
        </div>
      );
}

export default App;
