const { useState, Fragment } = React

export function LongTxt({ txt, userLength = 100 }) {
    const [isLongTxtShown, setLongTxtShown] = useState(false)

    const length = userLength

    function getTxtToShow(isLongTxtShown, txt, length) {
        return (txt.length < length || isLongTxtShown) ? txt : txt.substring(0, length + 1) + '...'
    }

    // let firstTxt = ''

    // if (txt.length > length) {
    //     firstTxt = txt.substring(0, length + 1)
    // }

    // function onToggleLongTxt() {
    //     setLongTxtShown((prevLongTxtShown) => !prevLongTxtShown)
    // }

    return <Fragment>
        {getTxtToShow(isLongTxtShown, txt, length)}
    </Fragment>

}