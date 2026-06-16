# GitHub actions

## Using GitHub actions on your own repository

Build and deploy your Flatpak application using the official GitHub
Actions:

https://github.com/flatpak/flatpak-github-actions

## Using GitHub actions on your Openpak repository

:::note
Please note that any custom GitHub actions that commits or pushes to PRs
or branches should be run in a controlled manner and only when necessary.
Since every such push creates a new build, too many triggers can overload
the Openpak build infrastructure.
:::

If your application is hosted in the Openpak GitHub organization, you can
use these actions, all others are not allowed:

1. Any action from the openpak organization
2. `peter-evans/create-pull-request` in any version
