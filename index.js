var x = Math.random()*10, y =  Math.floor(Math.random()*10);
y = 1+y%6;
x = 1+x%6;
x = Math.floor(x);

document.querySelector("img").setAttribute("src" , "images/dice"+x+".png");
document.querySelector("img.img2").setAttribute("src" , "images/dice"+y+".png");

if(x === y)
{
document.querySelector("h1").textContent = "Draw!";
}else
{
    if(x > y)
    {
        document.querySelector("h1").textContent = " 🚩 Player 1 Wins!";
    }else
    {
        document.querySelector("h1").textContent = " 🚩 Player 2 Wins!";

    }
}