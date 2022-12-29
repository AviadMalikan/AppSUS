const { useState, Fragment } = React

export function LongTxt({ txt, userLength = 100 }) {
    const [isLongTxtShown, setLongTxtShown] = useState(false)

    const length = userLength
    console.log('length: ', length)


    function getTxtToShow(isLongTxtShown, txt, length) {
        return (txt.length < length || isLongTxtShown) ? txt : txt.substring(0, length + 1) + '...'
    }

    // let firstTxt = ''

    // if (txt.length > length) {
    //     firstTxt = txt.substring(0, length + 1)
    // }

    function onToggleLongTxt() {
        setLongTxtShown((prevLongTxtShown) => !prevLongTxtShown)
    }

    return <Fragment>
        {/* <article onClick={onToggleLongTxt} className={isLongTxtShown ? '' : 'hover'}> */}
        {getTxtToShow(isLongTxtShown, txt, length)}
        {/* </article> */}
        {/* {txt.length > length && <button onClick={onToggleLongTxt}>{isLongTxtShown ? 'Read Less' : 'Read More'}</button>} */}
    </Fragment>


    // return <p>
    //     {txt.length < length && <div>
    //         {txt}
    //     </div>}
    //     {txt.length > length && <div>
    //         {!isLongTxtShown && <div>
    //             {firstTxt}
    //             <button onClick={() => onToggleLongTxt()}>Read More</button>
    //         </div>}
    //         {isLongTxtShown && <div>
    //             {txt}
    //             <button onClick={() => onToggleLongTxt()}>Read less</button>
    //         </div>
    //         }
    //     </div>}
    // </p>
}