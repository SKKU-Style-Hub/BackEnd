FROM node:alpine

# 도커 이미지 내 작업 디렉토리 변경 => 컨테이너에 담을 파일들을 잘 정리하기 위해
# 새로 추가되는 파일이 기존 파일 덮어쓰기 방지
WORKDIR /usr/src/app

# /usr/src/app/build 폴더에 build 내용들 저장


# Dependcy 설치(package*.json) => package.json 과 package-lock.json
# 나머지 파일들도 한번에 복사 
# 이 부분은 한번 npm install 이 실행되었던(재Build) 컨테이너는 캐시 정보가 있기 때문에 패스
COPY package*.json ./

# package.json에 작성되어 있는 dependecy 들을 설치해주기 
RUN npm install
# if you are building you code for porduction
# RUN npm ci --only=production

# npm install이 한 번 진행되고 나면 다음 빌드부턴 복사는 여기서부터 일어난다
COPY ./ ./

CMD [ "npm", "start" ]