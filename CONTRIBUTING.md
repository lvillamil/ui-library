# Contributing

As a contributor, here are the guidelines we would like you to follow:

 - [Releases](#releases)
 - [Commit Message Guidelines](#commit)

## <a name="releases"></a> Releases

#### Bumping version and changelog generation

1. Get latest changes from the main repository
    ```shell
    repo (master) $ git pull --ff origin master
    ```

2. Create new branch from main branch
    ```shell
    repo (master) $ git checkout -b my-changelog-branch master
    ```

3. Generate the changelog using one of the two following commands
    ```shell
    repo (my-changelog-branch) $ yarn release
    repo (my-changelog-branch) $ npx standard-version
    ```
    >that will bump the package and package lock files and (re)generate the CHANGELOG file too

    check [standard-version][standard-version] documentation in order to see all available parameters for `standard-version`

4. Add the modified files and make a commit in order to push your branch to github
    ```shell
    repo (my-changelog-branch) $ git add package.json package-lock.json CHANGELOG.md
    repo (my-changelog-branch) $ git commit -a -m 'docs: bump version and changelog recreation'
    repo (my-changelog-branch) $ git push origin my-changelog-branch master
    ```

5. In github, send a pull request to main branch, commit using a descriptive commit message that follows our [commit message conventions](#commit) and merge branch using the **merge and squash** strategy. 

6. Get latest changes from the main repository (check step 1)

7. Create a git tag using the version within package.json file and identify the commit hash of the previous merged branch and push your new tag
    ```shell
    repo (master) $ git tag v1.0.0 f5a148b1b74a0dc44b8ad2759648addedfb4d4e5
    repo (master) $ git push origin v1.0.0
    ```

## <a name="commit"></a> Commit Message Guidelines

*This specification is inspired on the [Conventional Commits][commit-message-format].*

We have very precise rules over how our Git commit messages must be formatted.
This format leads to **easier to read commit history**.

Each commit message consists of a **header**, a **body**, and a **footer**.

```
<header>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

The `header` is mandatory and must conform to the **Commit Message Header** format.

The `body` is mandatory for all commits except for those of scope "docs".
When the body is required it must be at least 20 characters long.

The `footer` is optional.

Any line of the commit message cannot be longer than 100 characters.


### Commit Message Header

```
<type>(<scope>): <short summary>
  │       │             │
  │       │             └─> Summary in present tense. Not capitalized. No period at the end.
  │       │
  │       └─> Commit Scope: tl|cc|animations|bazel|benchpress|common|compiler|compiler-cli|core|
  │                          elements|forms|http|language-service|localize|...
  │
  └─> Commit Type: build|ci|docs|feat|fix|perf|refactor|style|test
```

The `<type>` and `<summary>` fields are mandatory, the `(<scope>)` field is optional.


### Type

Must be one of the following:

* **build**: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
* **ci**: Changes to our CI configuration files and scripts (example scopes: Circle, BrowserStack, SauceLabs)
* **docs**: Documentation only changes
* **feat**: A new feature
* **fix**: A bug fix
* **perf**: A code change that improves performance
* **refactor**: A code change that neither fixes a bug nor adds a feature
* **test**: Adding missing tests or correcting existing tests


### Scope
The scope should be the name of the npm package affected (as perceived by the person reading the changelog generated from commit messages).

The following is the list of supported scopes (they are offered by default):

* `animations`
* `bazel`
* `benchpress`
* `common`
* `compiler`
* `compiler-cli`
* `core`
* `elements`
* `forms`
* `http`
* `language-service`
* `localize`
* `platform-browser`
* `platform-browser-dynamic`
* `platform-server`
* `platform-webworker`
* `platform-webworker-dynamic`
* `router`
* `service-worker`
* `upgrade`
* `zone.js`

### Summary

Use the summary field to provide a succinct description of the change:

* use the imperative, present tense: "change" not "changed" nor "changes"
* don't capitalize the first letter
* no dot (.) at the end


### Commit Message Body

Just as in the summary, use the imperative, present tense: "fix" not "fixed" nor "fixes".

Explain the motivation for the change in the commit message body. This commit message should explain _why_ you are making the change.
You can include a comparison of the previous behavior with the new behavior in order to illustrate the impact of the change.


### Commit Message Footer

The footer can contain information about breaking changes and is also the place to reference GitHub issues, Jira tickets, and other PRs that this commit closes or is related to.

```
BREAKING CHANGE: <breaking change summary>
<BLANK LINE>
<breaking change description + migration instructions>
<BLANK LINE>
<BLANK LINE>
Fixes #<issue number>
```

Breaking Change section should start with the phrase "BREAKING CHANGE: " followed by a summary of the breaking change, a blank line, and a detailed description of the breaking change that also includes migration instructions.

[commit-message-format]: https://www.conventionalcommits.org/en/v1.0.0/
[standard-version]: https://github.com/conventional-changelog/standard-version
