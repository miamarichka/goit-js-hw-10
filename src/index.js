import './css/styles.css';
import Notiflix from 'notiflix';
import debounce from 'lodash.debounce';
import { fetchCountries } from './js/fetchCountries';
import { countriesMarkUp, oneCountryMarkUp } from './js/markUp';

const DEBOUNCE_DELAY = 300;

const input = document.querySelector('#search-box')
const info = document.querySelector('.country-info')
const list = document.querySelector('.country-list')

input.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY))


function onInput(e){
    e.preventDefault();

    const country = e.target.value.trim();

    if(!country){
        list.innerHTML = '';
        info.innerHTML = '';
        return
    };


    fetchCountries(country)
    .then(data => {
        if(data.length > 10){
            Notiflix.Notify.info("Too many matches found. Please enter a more specific name.")
            return
        };
        if(data.length === 1){
            list.innerHTML = '';
            info.innerHTML = oneCountryMarkUp(data)
        } else {
            info.innerHTML = '';
            list.innerHTML = countriesMarkUp(data)
        }
        
    })
    .catch(error => {
        list.innerHTML = '';
        info.innerHTML = '';
        Notiflix.Notify.failure('Oops, there is no country with that name');
    })
}
