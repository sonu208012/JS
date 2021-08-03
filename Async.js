<html>
<body>

<h2>JavaScript Callback</h2>

<p>Wait 3 seconds (3000 milliseconds) for this page to change.</p>
<h3 id="h31"></h3>
<h3 id="h32"></h3>
<h3 id="h33"></h3>

<script>
    fetch ('/').then(()=>{ 
        document.getElementById("h31").innerHTML = "Fetching done";
    });
    
setTimeout(myFunction, 3000);

//myFunction();
function myFunction() {
document.getElementById("h31").innerHTML = "Hello There!!";
}
document.getElementById("h32").innerHTML = "A greeting message will be printing soon";
document.getElementById("h33").innerHTML = "closing program...";

</script>
</body>
</html>