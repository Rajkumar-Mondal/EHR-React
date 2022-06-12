import React from 'react';
import '../../styles/components/buttons/LoginButton.scss';

export default function LoginButton(props) {
    return (
        <input className="button-container" type="submit" value={props.value}/>
    )
}
