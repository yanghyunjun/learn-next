# Setting with React,Next,typscript,eslint

    nextjs with typescript

```
npx create-next-app -e with-typescript learn-next

```

    eslint install

```
npm install eslint --global

eslint --init

option
    yarn add eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin babel-eslint eslint-config-react-app eslint-plugin-import eslint-plugin-react eslint-plugin-react-hooks webpack --dev

```

# learn getInitialProps

    -서버로부터 데이터를 불러오기위한 nextJS의 기본 API
    -서버에서 fetch를 사용하기 위해서는
        isomorphic-unfetch를 사용한다.

```
$ yarn add isomorphic-unfetch
```

## learn getInitialProps

```
index.getInitialProps = async () => {
    const data = await fetch("api주소 or json");
    const json = await data.json();
    return {movies:json.data.movies}
}
```

### learn getInitialProps

    getInitialProps는 NextPageContext타입으로 err, req, res, pathname, query ,asPath ,AppTree 을 가지고있다.
