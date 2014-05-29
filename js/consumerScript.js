function close_all_hide()
{
document.getElementById("overlay").style.visibility='hidden';
document.getElementById("popup01").style.visibility='hidden';
document.getElementById("popup02").style.visibility='hidden';
document.getElementById("popup03").style.visibility='hidden';
document.getElementById("popup04").style.visibility='hidden';
document.getElementById("popup05").style.visibility='hidden';
document.getElementById("overlay").style.visibility='hidden';
}
function close_all()
{
document.getElementById("overlay").style.visibility='hidden';
document.getElementById("popup01").style.visibility='hidden';
document.getElementById("popup02").style.visibility='hidden';
document.getElementById("popup03").style.visibility='hidden';
document.getElementById("popup04").style.visibility='hidden';
document.getElementById("popup05").style.visibility='hidden';
document.getElementById("overlay").style.width='100%';
document.getElementById("overlay").style.height=''+document.body.clientHeight+'px';
document.getElementById("overlay").style.visibility='visible';
}
function close_pop01()
{
document.getElementById("overlay").style.visibility='hidden';
document.getElementById("popup01").style.visibility='hidden';

}
function pop01()
{
close_all();
document.getElementById("overlay").style.visibility='visible';
document.getElementById("popup01").style.visibility='visible';
document.getElementById("popup01").style.marginTop='-50px';
}

function close_pop02()
{
document.getElementById("overlay").style.visibility='hidden';
document.getElementById("popup02").style.visibility='hidden';
}
function pop02()
{
close_all();
document.getElementById("overlay").style.visibility='visible';
document.getElementById("popup02").style.visibility='visible';
document.getElementById("popup02").style.marginTop='-50px';
}

function close_pop03()
{
document.getElementById("overlay").style.visibility='hidden';
document.getElementById("popup03").style.visibility='hidden';
}
function pop03()
{
close_all();
document.getElementById("overlay").style.visibility='visible';
document.getElementById("popup03").style.visibility='visible';
document.getElementById("popup03").style.marginTop='-150px';
}

function close_pop04()
{
document.getElementById("overlay").style.visibility='hidden';
document.getElementById("popup04").style.visibility='hidden';
}
function pop04()
{
close_all();
document.getElementById("overlay").style.visibility='visible';
document.getElementById("popup04").style.visibility='visible';
document.getElementById("popup04").style.marginTop='-200px';
}

function close_pop05()
{
document.getElementById("overlay").style.visibility='hidden';
document.getElementById("popup05").style.visibility='hidden';
}
function pop05()
{
close_all();
document.getElementById("overlay").style.visibility='visible';
document.getElementById("popup05").style.visibility='visible';
document.getElementById("popup05").style.marginTop='-450px';
}
