

/*        phase diagram
 <embed width="680" height="680" src="../../d.svg" 
script=
'
setBorder(1);
initPicture(200,855,-0.25,1.25);

fontstyle = "normal";
text([450,0.48], "(500, 0.38)", above);
text([365, 0.09], "(350, 0.19)", right );
text([500,0.78], "kyanite");
text([505, 0.19], "andalusite");
text([700, 0.45], "sillimanite");
text([745,.13], "(760, 0)", above);
text([795,.85], "(795, 1.0)", below);


text([572,1.2], "Phase Diagram for ");
text([572,1.1], "Alumninosilicate Polymorphs");
text([572,-.2], "Temperature (&#176C)");
rotate([-155,1.15],"Pressure (GPA)")

strokewidth="2"
marker="arrow"
line([380,.12],[350,.19]);
line([450,.49],[500,.39]);
line([785,.85],[793,.98]);
line([760,.14],[760,.01]);

marker="none"
a=[350,0.19]
b=[500,0.38]
c=[795,1.0]
d=[760,0]
o=[350,0]
t=[0,1]

strokewidth="2"
line(a,b)
line(b,c)
line(b,d);

strokewidth="1"
plot("y=0.0",-5,5)
plot("y=0.1",-5,5)
plot("y=0.2",-5,5)
plot("y=0.3",-5,5)
plot("y=0.4",-5,5)
plot("y=0.5",-5,5)
plot("y=0.6",-5,5)
plot("y=0.7",-5,5)
plot("y=0.8",-5,5)
plot("y=0.9",-5,5)
plot("y=1.0",-5,5)

line([350,-0.02],[350,0.02])
line([400,-0.02],[400,0.02])
line([450,-0.02],[450,0.02])
line([500,-0.02],[500,0.02])
line([550,-0.02],[550,0.02])
line([600,-0.02],[600,0.02])
line([650,-0.02],[650,0.02])
line([700,-0.02],[700,0.02])
line([750,-0.02],[750,0.02])
line([800,-0.02],[800,0.02])

text([345,0],"0",left);
text([345,0.2],"0.2",left);
text([345,0.4],"0.4",left);
text([345,0.6],"0.6",left);
text([345,0.8],"0.8",left);
text([345,1.0],"1.0",left);

text([400,-0.02],"400",below)
text([500,-0.02],"500",below)
text([600,-0.02],"600",below)
text([700,-0.02],"700",below)
text([800,-0.02],"800",below)

line([350,1],[800,1])
line([800,0],[800,.77])
line([800,.85],[800,1])
line([350,0],[800,0])
line([350,0],[350,1])
'
> 

*/


/*        line graph
<embed width="680" height="680" src="../../d.svg" 
script=
'
setBorder(1);
initPicture(-20,70,-25,255);

fontstyle = "normal";
text([35,250], "Data from Exercise ");
text([35,240], "Study Participant");
text([572,-.2], "Time Elapsed (minutes)");
rotate([-15,120],"Heart rate (beats per minute)")



marker="none"
a=[0,50]
b=[10,50]
c=[20,110]
d=[25,100]
e=[30,135]
f=[35,120]
g=[40,136]
h=[45,119]
i=[50,137]



strokewidth="2"
line(a,b)
curve(b,c,d,e)
curve(e,f,g,h,i);

strokewidth="1"
plot("y=20",-5,5)
plot("y=40",-5,5)
plot("y=60",-5,5)
plot("y=80",-5,5)
plot("y=100",-5,5)
plot("y=120",-5,5)
plot("y=140",-5,5)
plot("y=160",-5,5)
plot("y=180",-5,5)
plot("y=200",-5,5)
plot("y=220",-5,5)

line([10,-5],[10,5])
line([20,-5],[20,5])
line([30,-5],[30,5])
line([40,-5],[40,5])
line([50,-5],[50,5])
line([60,-5],[60,5])


text([0,0],"0",left);
text([0,20],"20",left);
text([0,40],"40",left);
text([0,60],"60",left);
text([0,80],"80",left);
text([0,100],"100",left);
text([0,120],"120",left);
text([0,140],"140",left);
text([0,160],"160",left);
text([0,180],"180",left);
text([0,200],"200",left);
text([0,220],"220",left);


text([10,0],"10",below)
text([20,0],"20",below)
text([30,0],"30",below)
text([40,0],"40",below)
text([50,0],"50",below)
text([60,0],"60",below)


marker="arrow"
line([0,0],[65,0])
line([0,0],[0,240])
'
> 
*/







/*        Simple graph no title with axis

<div style="text-align: center;">
  <embed width="580" height="380" src="../../d.svg" 
script=
'
setBorder(1);
initPicture(-10,16,-10,12);




marker="arrow"
line([-15,0],[14,0])
line([0,-10],[0,10])

text([14,0],"x",right)
text([0,10],"y",above)
'
> 
</div>
*/




/*        Simple graph title no axis

<div style="text-align: center;">
  <embed width="580" height="380" src="../../d.svg" 
script=
'
setBorder(1);
initPicture(-30,95,-100,8000);


fontstyle = "normal";

text([45,-1,000], "Item price (dollars)");
rotate([-15,120],"Profit (dollars)")





line([-1,1000],[90,1000])
line([-1,2000],[90,2000])
line([-1,3000],[90,3000])
line([-1,4000],[90,4000])
line([-1,5000],[90,5000])
line([-1,6000],[90,6000])
line([-1,7000],[90,7000])

line([0,0],[90,0])
line([0,7000],[0,0])

plot("-10(x^2+40)+6000",0,90)

'
> 
</div>
*/