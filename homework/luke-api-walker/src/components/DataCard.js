import {QueryForm} from './QueryForm';
export const DataCard = (props) => {
    let rows = [];
    const isURL = (text) =>{
        let url;
        try{
            url = new URL(text);
        } catch(_) {
            return false;
        }
        return true;
    }
    for(const key in props.data){
        if(isURL(props.data[key])){
            rows.push(<li><b>{key}</b>: <a href = {props.data[key]}>{props.data[key]}</a></li>)
        }else{
            rows.push(<li><b>{key}</b>: {props.data[key]}</li>);
        }
    }
    return(
        <div>
            <QueryForm setData = {props.setData}/>
            <ul>
                {rows}
            </ul>
        </div>
    )
}