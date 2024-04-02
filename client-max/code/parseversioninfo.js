
inlets = 1;
outlets = 1;







function bang()
{
	var d = new Dict("versioninfo");

	outlet(0,"branch",d.get("branch"));
	outlet(0,"hash",d.get("hash"));
	outlet(0,"time",d.get("time"));	
}
