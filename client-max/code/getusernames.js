function bang() {
	var users = new Dict("ping").get("users")
	outlet(0,"cols", 1 )
	outlet(0,"rows", users.length )
	if( users.length > 4 ) {
			outlet(0,"vscroll", 1 )
	} else {
			outlet(0,"vscroll", 0 )
	}
	for (i = 0; i < users.length; i++) {
		username = users[i].get("username")
		outlet(0, "set", 0, i, username)
	}
}