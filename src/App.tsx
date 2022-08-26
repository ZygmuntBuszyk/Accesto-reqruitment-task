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

    const debounceTime = 1000;

    const summonCat = useCallback(
        debounce(async (filter) => {
            let buffer;

            try {
                buffer = await CatService.getBufferCat(filter);
                setIsLoading(false)
            }
            catch(e) {
                setIsLoading(false)
            }

            const base64ImageString = Buffer.from(buffer as any , 'binary').toString('base64')
            setImageSource(`data:image/jpeg;base64,${base64ImageString}`)
        }, debounceTime),
        []
    );

    useEffect(() => {
        if (filter) {
            setIsLoading(true);

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
                }
            </div>
        </div>
      );
}

export default App;
