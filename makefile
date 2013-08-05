publish:
	sed -ig 's/\.\.\/\.\.\///' *.html
	sed -ig 's/1\.0\///g' *.html
	rm -rf *.htmlg
	git add .
	git commit -m 'sync code auto'
	git push
