function superbowlWin(record) {

    function sbWin(x) {
        return (x.result === "W")
    }

    let denverWin = record.find(sbWin);

    if (denverWin){
        return (denverWin.year);
    }
};