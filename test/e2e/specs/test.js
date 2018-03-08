// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage
// System Admin // ssined@insight-kmt.com
// Executive // bboss@insight-kmt.com
// Content Manager // csmith@insight-kmt.com
// Author // pjacobs@insight-kmt.com
// Password:"abcd1234!"


module.exports = {
  'SA can Log In': function test(browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL;
    console.log(devServer);

    browser
      .url('http://localhost:80/')
      .maximizeWindow()
      .waitForElementPresent('i[class=ti-lock]', 5000)
      .assert.elementPresent('i[class=ti-lock]')
      .click('i[class=ti-lock]')
      .assert.elementPresent('input[id=email]')
      .setValue('input[id=email]', 'ssined@insight-kmt.com')
      .waitForElementPresent('input[id=password]', 5000)
      .assert.elementPresent('input[id=password]')
      .setValue('input[id=password]', 'abcd1234!')
      .click('button[type=submit]')
      .waitForElementPresent('i[class=ti-unlock]', 5000)
      .assert.elementPresent('i[class=ti-unlock]');
  },

  'SA can Add User and User can Log In': function (browser) {
    browser
      .assert.elementPresent('i[class=ti-user]')
      .click('i[class=ti-user]')
      .waitForElementPresent('i[class=ti-user]', 5000)
      .assert.elementPresent('i[class=ti-user]')
      .useXpath()
      .waitForElementPresent('//a[text()="New"]', 5000)
      .assert.elementPresent('//a[text()="New"]')
      .click('//a[text()="New"]')
      .useCss()
      .waitForElementPresent('input[name=fullname]', 5000)
      .assert.elementPresent('input[name=fullname]')
      .setValue('input[name=fullname]', 'Test User')
      .assert.elementPresent('input[name=email]')
      .setValue('input[name=email]', 'testuser@test.com')
      .assert.elementPresent('input[name=password]')
      .setValue('input[name=password]', 'abcd1234!')
      .assert.elementPresent('input[name=confirmed]')
      .setValue('input[name=confirmed]', 'abcd1234!')
      .click('input[id=roleAuthor]')
      .click('button[type=submit]')
      .click('i[class=ti-unlock]')
      .waitForElementPresent('i[class=ti-lock]', 5000)
      .click('i[class=ti-lock')
      .assert.elementPresent('input[id=email]')
      .setValue('input[id=email]', 'testuser@test.com')
      .assert.elementPresent('input[id=password]')
      .setValue('input[id=password]', 'abcd1234!')
      .click('button[type=submit]')
      .waitForElementPresent('i[class=ti-layers]', 5000)
      .assert.elementPresent('i[class=ti-layers]');
  },

  'Author can create KA 1': function (browser) {
    browser
      .click('i[class=ti-layers')
      .useXpath()
      .click('//a[text()="New"]')
      .useCss()
      .waitForElementPresent('input[name=title]', 5000)
      .assert.elementPresent('input[name=title]')
      .setValue('input[name=title]', 'Test KA 1')
      .assert.elementPresent('div[class="CodeMirror cm-s-paper CodeMirror-wrap"]')
      .click('div[class="CodeMirror cm-s-paper CodeMirror-wrap"]')
      .click('.CodeMirror textarea').keys('This is body text')
      .assert.elementPresent('input[name=categories]')
      .sendKeys('input[name=categories]', 'created, via, nightwatch')
      .click('button[type=submit]')
      .waitForElementPresent('div[class="toast-container toast-top-full-width"]', 5000)
      .assert.elementPresent('div[class="toast-container toast-top-full-width"]')
      .refresh();
  },

  'Author can create KA 2': function (browser) {
    browser
      .waitForElementPresent('input[name=title]', 5000)
      .assert.elementPresent('input[name=title]')
      .setValue('input[name=title]', 'Test KA 2')
      .assert.elementPresent('div[class="CodeMirror cm-s-paper CodeMirror-wrap"]')
      .click('div[class="CodeMirror cm-s-paper CodeMirror-wrap"]')
      .click('.CodeMirror textarea').keys('This is body text')
      .assert.elementPresent('input[name=categories]')
      .sendKeys('input[name=categories]', 'created, via, nightwatch')
      .click('button[type=submit]')
      .waitForElementPresent('div[class="toast-container toast-top-full-width"]', 5000)
      .assert.elementPresent('div[class="toast-container toast-top-full-width"]')
      .refresh();
  },

  'Author can edit and submit KA 2': function (browser) {
    browser
      .waitForElementPresent('i[class=ti-layers', 5000)
      .click('i[class=ti-layers')
      .useXpath()
      .click('//a[text()="Edit"]')
      .waitForElementPresent('//table/tbody/tr[2]/th[2]/a[1]/i', 5000)
      .click('//table/tbody/tr[2]/th[2]/a[1]/i')
      .assert.elementPresent('//button[text()="Update"]')
      .useCss()
      .assert.elementPresent('input[name=title]')
      .clearValue('input[name=title]')
      .setValue('input[name=title]', 'Author Edited title text - KA 2')
      .click('select[id=status')
      .click('option[value="pending approval"]')
      .useXpath()
      .click('//button[text()="Update"]')
      .useCss()
      .waitForElementPresent('div[class="toast-container toast-top-full-width"]', 5000)
      .assert.elementPresent('div[class="toast-container toast-top-full-width"]')
      .refresh();
  },

  'Author can edit and submit KA 1': function (browser) {
    browser
      .waitForElementPresent('i[class=ti-layers', 5000)
      .click('i[class=ti-layers')
      .useXpath()
      .click('//a[text()="Edit"]')
      .waitForElementPresent('//table/tbody/tr[1]/th[2]/a[1]/i', 5000)
      .click('//table/tbody/tr[1]/th[2]/a[1]/i')
      .assert.elementPresent('//button[text()="Update"]')
      .useCss()
      .assert.elementPresent('input[name=title]')
      .clearValue('input[name=title]')
      .setValue('input[name=title]', 'Author Edited title text - KA 1')
      .click('select[id=status')
      .click('option[value="pending approval"]')
      .useXpath()
      .click('//button[text()="Update"]')
      .useCss()
      .waitForElementPresent('div[class="toast-container toast-top-full-width"]', 5000)
      .assert.elementPresent('div[class="toast-container toast-top-full-width"]')
      .refresh()
      .waitForElementPresent('i[class=ti-unlock]', 5000)
      .click('i[class=ti-unlock');
  },

  'CM can Reject KA 1': function (browser) {
    browser
      .waitForElementPresent('i[class=ti-lock]', 5000)
      .assert.elementPresent('i[class=ti-lock]')
      .click('i[class=ti-lock]')
      .assert.elementPresent('input[id=email]')
      .setValue('input[id=email]', 'csmith@insight-kmt.com')
      .assert.elementPresent('input[id=password]')
      .setValue('input[id=password]', 'abcd1234!')
      .click('button[type=submit]')
      .waitForElementPresent('i[class=ti-unlock]', 5000)
      .assert.elementPresent('i[class=ti-unlock]')
      .click('i[class=ti-layers')
      .useXpath()
      .click('//a[text()="Edit"]')
      .waitForElementPresent('//table/tbody/tr[1]/th[2]/a[1]/i', 5000)
      .click('//table/tbody/tr[1]/th[2]/a[1]/i')
      .assert.elementPresent('//button[text()="Update"]')
      .useCss()
      .assert.elementPresent('input[name=title]')
      .clearValue('input[name=title]')
      .setValue('input[name=title]', 'CM edited title text - KA 1 - Rejected')
      .click('select[id=status')
      .click('option[value="rejected"]')
      .useXpath()
      .click('//button[text()="Update"]')
      .useCss()
      .waitForElementPresent('div[class="toast-container toast-top-full-width"]', 5000)
      .assert.elementPresent('div[class="toast-container toast-top-full-width"]')
      .refresh();
  },

  'CM can edit, Approve, and Publish KA 2': function (browser) {
    browser
      .waitForElementPresent('i[class=ti-unlock]', 5000)
      .assert.elementPresent('i[class=ti-unlock]')
      .click('i[class=ti-layers')
      .useXpath()
      .click('//a[text()="Edit"]')
      .waitForElementPresent('//table/tbody/tr[2]/th[2]/a[1]/i', 5000)
      .click('//table/tbody/tr[2]/th[2]/a[1]/i')
      .assert.elementPresent('//button[text()="Update"]')
      .useCss()
      .waitForElementPresent('input[name=title]', 5000)
      .assert.elementPresent('input[name=title]')
      .clearValue('input[name=title]')
      .setValue('input[name=title]', 'CM edited title text - KA 2 - Approved')
      .clearValue('input[name=categories]')
      .setValue('input[name=categories]', 'CM, Approved, Categories')
      .click('select[id=status')
      .click('option[value="approved"]')
      .useXpath()
      .click('//button[text()="Update"]')
      .useCss()
      .waitForElementPresent('div[class="toast-container toast-top-full-width"]', 5000)
      .assert.elementPresent('div[class="toast-container toast-top-full-width"]')
      .refresh();
  },

  'CM can Remove KA 1': function (browser) {
    browser
      .click('i[class=ti-layers]')
      .useXpath()
      .click('//a[text()="Edit"]')
      .waitForElementPresent('//table/tbody/tr[2]/th[2]/a[2]/i', 5000)
      .click('//table/tbody/tr[2]/th[2]/a[2]/i')
      .pause(1000)
      .acceptAlert()
      .useCss()
      .waitForElementPresent('i[class=ti-unlock]', 5000)
      .click('i[class=ti-unlock]')
      .assert.elementPresent('i[class=ti-lock]');
  },

  'Author can edit KA after Rejection': function (browser) {
    browser
      .waitForElementPresent('i[class=ti-lock]', 5000)
      .click('i[class=ti-lock')
      .assert.elementPresent('input[id=email]')
      .setValue('input[id=email]', 'testuser@test.com')
      .assert.elementPresent('input[id=password]')
      .setValue('input[id=password]', 'abcd1234!')
      .click('button[type=submit]')
      .waitForElementPresent('i[class=ti-layers]', 5000)
      .assert.elementPresent('i[class=ti-layers]')
      .click('i[class=ti-layers')
      .useXpath()
      .click('//a[text()="Edit"]')
      .waitForElementPresent('//table/tbody/tr/th[2]/a[1]/i', 5000)
      .click('//table/tbody/tr/th[2]/a[1]/i')
      .assert.elementPresent('//button[text()="Update"]')
      .useCss()
      .assert.elementPresent('input[name=title]')
      .clearValue('input[name=title]')
      .setValue('input[name=title]', 'KA 1 - Previously Rejected')
      .click('select[id=status')
      .click('option[value="pending approval"]')
      .useXpath()
      .click('//button[text()="Update"]')
      .useCss()
      .waitForElementPresent('div[class="toast-container toast-top-full-width"]', 5000)
      .assert.elementPresent('div[class="toast-container toast-top-full-width"]')
      .refresh()
      .waitForElementPresent('i[class=ti-unlock]', 5000)
      .click('i[class=ti-unlock');
  },

  'CM Publish KA 1': function (browser) {
    browser
      .waitForElementPresent('i[class=ti-lock]', 5000)
      .assert.elementPresent('i[class=ti-lock]')
      .click('i[class=ti-lock]')
      .assert.elementPresent('input[id=email]')
      .setValue('input[id=email]', 'csmith@insight-kmt.com')
      .assert.elementPresent('input[id=password]')
      .setValue('input[id=password]', 'abcd1234!')
      .click('button[type=submit]')
      .waitForElementPresent('i[class=ti-unlock]', 5000)
      .assert.elementPresent('i[class=ti-unlock]')
      .click('i[class=ti-layers')
      .useXpath()
      .click('//a[text()="Edit"]')
      .waitForElementPresent('//table/tbody/tr/th[2]/a[1]/i', 5000)
      .click('//table/tbody/tr/th[2]/a[1]/i')
      .assert.elementPresent('//button[text()="Update"]')
      .useCss()
      .waitForElementPresent('input[name=title]', 5000)
      .click('select[id=status')
      .click('option[value="approved"]')
      .useXpath()
      .click('//button[text()="Update"]')
      .useCss()
      .waitForElementPresent('div[class="toast-container toast-top-full-width"]', 5000)
      .assert.elementPresent('div[class="toast-container toast-top-full-width"]')
      .refresh()
      .waitForElementPresent('i[class=ti-unlock]', 5000)
      .click('i[class=ti-unlock');
  },

  'Reader can Read KA': function (browser) {
    browser
      .waitForElementPresent('i[class=ti-lock]', 5000)
      .assert.elementPresent('input[name=search]')
      .setValue('input[name=search]', 'nightwatch')
      .click('button[type=submit]')
      .waitForElementPresent('a[text()="KA 1 - Previously Rejected"]')
      .click('a[text()="KA 1 - Previously Rejected"]', 5000)
      .waitForElementPresent('h1[text()="KA 1 - Previously Rejected"]', 5000)
      .assert.elementPresent('h1[text()="KA 1 - Previously Rejected"]')
      .waitForElementPresent('button[id=btnUpvote]', 5000)
      .assert.elementPresent('button[id=btnUpvote]')
      .click('button[id=btnUpvote]');
  },


  'CM can Remove KA 2': function (browser) {
    browser
      .waitForElementPresent('i[class=ti-lock]', 5000)
      .assert.elementPresent('i[class=ti-lock]')
      .click('i[class=ti-lock]')
      .assert.elementPresent('input[id=email]')
      .setValue('input[id=email]', 'csmith@insight-kmt.com')
      .assert.elementPresent('input[id=password]')
      .setValue('input[id=password]', 'abcd1234!')
      .click('button[type=submit]')
      .waitForElementPresent('i[class=ti-unlock]', 5000)
      .assert.elementPresent('i[class=ti-unlock]')
      .click('i[class=ti-layers]')
      .useXpath()
      .click('//a[text()="Edit"]')
      .waitForElementPresent('//table/tbody/tr/th[2]/a[2]/i', 5000)
      .click('//table/tbody/tr/th[2]/a[2]/i')
      .pause(1000)
      .acceptAlert()
      .useCss()
      .waitForElementPresent('i[class=ti-unlock]', 5000)
      .click('i[class=ti-unlock]')
      .assert.elementPresent('i[class=ti-lock]');
  },

  'SA can Remove User and User can no longer Log In': function (browser) {
    browser
      .waitForElementPresent('i[class=ti-lock]', 5000)
      .click('i[class=ti-lock]')
      .assert.elementPresent('input[id=email]')
      .setValue('input[id=email]', 'ssined@insight-kmt.com')
      .assert.elementPresent('input[id=password]')
      .setValue('input[id=password]', 'abcd1234!')
      .click('button[type=submit]')
      .waitForElementPresent('i[class=ti-unlock]', 5000)
      .assert.elementPresent('i[class=ti-unlock]')
      .click('i[class=ti-user]')
      .useXpath()
      .click('//a[text()="Edit"]')
      .waitForElementPresent('//table/tbody/tr[5]/th[2]/a[2]/i', 5000)
      .click('//table/tbody/tr[5]/th[2]/a[2]/i')
      .pause(1000)
      .acceptAlert()
      .useCss()
      .click('i[class=ti-unlock]')
      .waitForElementPresent('i[class=ti-lock]', 5000)
      .click('i[class=ti-lock')
      .assert.elementPresent('input[id=email]')
      .setValue('input[id=email]', 'testuser@test.com')
      .assert.elementPresent('input[id=password]')
      .setValue('input[id=password]', 'abcd1234!')
      .click('button[type=submit]')
      .waitForElementPresent('div[class="toast-container toast-top-full-width"]', 5000)
      .assert.elementPresent('div[class="toast-container toast-top-full-width"]')
      .end();
  },
};
