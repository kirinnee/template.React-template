import * as React from 'react';


export interface Props {

    string: string;
    repeat: number;

}


export function Repeat({ string, repeat }: Props) {

    return(
        <div>
            {(string + " ").repeat(repeat)}
        </div>

    );

}