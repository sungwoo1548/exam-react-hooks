import { useContext } from 'react';
import { LanguageContext } from './Language';

// get text according to id & current language
export function Text({ location, word, toUpperCase = false }) {
    const { dictionary } = useContext(LanguageContext);

    let target = dictionary[location][word] || word;
    if (toUpperCase) target = target.toUpperCase();

    return target;
};