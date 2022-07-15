import {QueryForm} from './QueryForm';
export const NotFound = (props) => {

    return(
        <div>
            <QueryForm setData = {props.setData}/>
            <h2>These are not the droids you're looking for</h2>
            <img width="400px"src='https://starwarsblog.starwars.com/wp-content/uploads/2017/06/25-star-wars-quotes-obi-wan-kenobi-identification-tall.jpg'></img>
        </div>
    )
}