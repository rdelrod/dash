# Because I was to lazy to google gulp

NPM=/usr/bin/npm
GULP=/usr/bin/gulp


all:
	cd web/; $(NPM) install; cd semantic; $(GULP) build
	cd web/; $(GULP) sass;
	echo "Done :)"
