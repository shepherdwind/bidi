demo:
	git add -u
	git commit -m 'change demo'
	git push gallery
	curl http://gallery.kissyui.com/sync/bidi
