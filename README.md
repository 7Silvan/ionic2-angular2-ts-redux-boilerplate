#### Dependencies
```shell
nvm install 4.2.0
npm install -g ionic@beta

# nvm is not a required, but suggested if you want to keep sane.
```

---

#### Install
```shell
git clone https://github.com/janjarfalk/ionic2-angular2-ts-redux-boilerplate.git
cd ionic2-angular2-ts-redux-boilerplate
nvm use 4.2.0 && npm install && ionic plugin add cordova-plugin-wkwebview-engine && ionic plugin add https://git-wip-us.apache.org/repos/asf/cordova-plugins.git#master:local-webserver

# You need to run the Command Prompt as administrator on Windows.
```

#### Start Web
```shell
ionic run serve
```

#### Start IOS Simulator
```shell
ionic run ios && ionic run ios
```


---

#### Code Style Conventions
Our Code Style Conventions are described in and enforce using [tslint.json](tslint/tslint.json) and [.editorconfig](.editorconfig). In-depth explination of the rules can be found at [palantir/tslint](http://palantir.github.io/tslint/rules/), [tslint-microsoft-contrib](https://github.com/Microsoft/tslint-microsoft-contrib) and [editorconfig.org](http://editorconfig.org/). Common warnings and solutions below.
