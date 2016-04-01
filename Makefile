# Because I was to lazy to google gulp

NPM=/usr/bin/npm
GULP=/usr/bin/gulp
BOWER=/usr/bin/bower

all:
	cd web/; $(NPM) install; $(BOWER) install; cd semantic; $(GULP) build
	cd web/; $(GULP) sass;
	echo "Done :)"
