{
	"name" : "client-max",
	"version" : 1,
	"creationdate" : 3791792537,
	"modificationdate" : 3792306496,
	"viewrect" : [ 345.0, 322.0, 308.0, 597.0 ],
	"autoorganize" : 0,
	"hideprojectwindow" : 0,
	"showdependencies" : 1,
	"autolocalize" : 0,
	"contents" : 	{
		"patchers" : 		{
			"main.maxpat" : 			{
				"kind" : "patcher",
				"local" : 1
			}
,
			"channelfilter.maxpat" : 			{
				"kind" : "patcher",
				"local" : 1
			}
,
			"DrumAndBass.maxpat" : 			{
				"kind" : "patcher",
				"local" : 1
			}
,
			"netmidi-connector.maxpat" : 			{
				"kind" : "patcher",
				"local" : 1,
				"singleton" : 				{
					"bootpath" : "~/dev/NetMidi/client-max/patchers",
					"projectrelativepath" : "./patchers"
				}

			}
,
			"client.maxpat" : 			{
				"kind" : "patcher",
				"local" : 1
			}
,
			"midimonitor.maxpat" : 			{
				"kind" : "patcher",
				"local" : 1
			}

		}
,
		"code" : 		{
			"index.js" : 			{
				"kind" : "javascript",
				"local" : 1
			}

		}
,
		"data" : 		{
			"package.json" : 			{
				"kind" : "json",
				"local" : 1
			}
,
			"package-lock.json" : 			{
				"kind" : "json",
				"local" : 1
			}

		}

	}
,
	"layout" : 	{

	}
,
	"searchpath" : 	{
		"0" : 		{
			"bootpath" : "~/dev/NetMidi/client-max/node",
			"projectrelativepath" : "./node",
			"label" : "node",
			"recursive" : 1,
			"enabled" : 1,
			"includeincollective" : 1
		}

	}
,
	"detailsvisible" : 1,
	"amxdtype" : 0,
	"readonly" : 0,
	"devpathtype" : 0,
	"devpath" : ".",
	"sortmode" : 0,
	"viewmode" : 0,
	"includepackages" : 0
}
