function valueGen() {
    return Math.floor(100000 + Math.random() * 900000);
}

function colorGen() {
    document.getElementById("head1").innerHTML = "#" + valueGen();
    document.getElementById("box").style.backgroundColor = "#" + valueGen();
    document.getElementById("head2").style.color = "#" + valueGen();
}

