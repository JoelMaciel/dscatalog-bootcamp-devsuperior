import React from 'react';
import './style.scss';
import { ReactComponent as ArrowIcon } from '../../assets/images/arrow.svg';
import { type } from 'os';

type Props = {
    text: String;
}

const Buttonicon = ({text }: Props) => (
    <div className="d-flex">
        <button className="btn btn-primary btn-icon">
            <h5>{text}</h5>
        </button>
        <div className="btn-icon-content">
            <ArrowIcon />
        </div>

    </div>
);

export default Buttonicon;