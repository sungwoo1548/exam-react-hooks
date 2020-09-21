import React, { useContext } from 'react';
import { LanguageContext } from './Language';

// get text according to id & current language
export function Text({ location, word }) {
    const {dictionary} = useContext(LanguageContext);

    return dictionary[location][word] || word;
};