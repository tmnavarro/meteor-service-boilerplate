
build:
	yarn test \
	&& meteor build --architecture=os.linux.x86_64 build/ \
  && cd build && tar -zxvf meteor-service-boilerplate.tar.gz && cd bundle \
	&& cd ../../ && docker build -t redleap/ms-boilerplate . \
  && rm -rf build
