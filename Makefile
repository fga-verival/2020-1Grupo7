
.PHONY: test-build

test-build:
	sudo docker build -t testcdb -f Dockerfile . && sudo docker run --rm -p 3000:3000 -it testcdb

.PHONY: test-run

test-run:
	sudo docker run --rm -p 3000:3000 -it testcdb