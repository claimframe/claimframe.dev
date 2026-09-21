+++
title = "Install on Linux"
description = "Choose and install the native DEB or RPM desktop package for an x86-64 Linux distribution."
layout = "docs"
pendingRelease = true
pendingNotice = "Native DEB and RPM packages are being prepared to replace the Linux AppImage. They are not yet public downloads. Use these steps after the coordinated release."
[[related]]
label = "Downloads"
url = "/#download"
+++

Before upgrading an existing vault, read the [0.4.0 release notes and migration guidance](/releases/0.4.0/).

Choose one package for your x86-64 distribution:

| Distribution package family | Desktop package |
| --- | --- |
| Debian / Ubuntu | `Claimframe-X.Y.Z-linux-amd64.deb` |
| Fedora / RHEL and compatible RPM distributions | `Claimframe-X.Y.Z-linux-x86_64.rpm` |

`amd64` and `x86_64` both identify the 64-bit Intel/AMD architecture here; these are not ARM packages. Package-family labels help you choose a format, but do not guarantee compatibility with every distribution or version. Your package manager must be able to satisfy the package's dependencies.

## Install a downloaded package

Close all Claimframe windows and connected MCP processes before installing or upgrading. Download the appropriate package from [Claimframe downloads](/#download). Open a terminal in the download directory and replace `X.Y.Z` below with the downloaded version.

For Debian / Ubuntu:

```sh
sudo apt install ./Claimframe-X.Y.Z-linux-amd64.deb
```

For Fedora / RHEL-family systems using DNF:

```sh
sudo dnf install ./Claimframe-X.Y.Z-linux-x86_64.rpm
```

Review the package manager's dependency and installation summary. The package installs the app executable, desktop launcher, and icon in standard system locations. Launch **Claimframe** from your desktop's application menu after installation. Claimframe does not install itself or ask you to register a launcher manually.

Native packages use normal operating-system permissions and policies; the package format does not introduce application sandbox isolation.

## Update or remove

Close all Claimframe windows and connected MCP processes, download a newer package, and install it with the same command. These downloads do not configure an APT or YUM/DNF repository or an automatic updater.

To remove the desktop package, use the package name `claimframe`:

```sh
sudo apt remove claimframe
# Or, on a DNF system:
sudo dnf remove claimframe
```

If you used an AppImage previously, do not run that old app or an older MCP client against an upgraded schema 17 vault. If an external AppImage helper created a launcher, remove the old entry through that helper to avoid opening the previous version. Keep compatible desktop and MCP versions when sharing a vault.

The package contains application files, not your vaults. Keep your normal vault backups when updating or removing the app.

The [standalone Linux MCP executable](/#download) is a separate download and does not require the desktop app to be running.
