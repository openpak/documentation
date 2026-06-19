# Manifest templates

Starting points for a Flatpak manifest, one per common language or toolkit.
Each is available in **YAML** and **JSON** — pick whichever you prefer; Openpak
accepts both. Download one, rename it to your app ID
(`com.example.App.yaml`), and fill in the placeholders.

:::important
These are skeletons, not drop-in builds. Before submitting you must:

- replace `com.example.App` with your real [app ID](/docs/for-app-authors/requirements),
  the `command`, and the module name;
- point the source at your repository and **pin an exact `commit`** (a `tag`
  alone is rejected — tags can move);
- generate offline dependency sources where noted (Rust/Node/.NET/Flutter/Ruby
  builds run without network access);
- trim `finish-args` to only the permissions your app actually needs.

All templates target the **current runtimes** (GNOME `50`, KDE `6.10`,
Freedesktop `25.08`). See [Runtimes](/docs/for-app-authors/runtimes).
:::

## Templates

| Language / toolkit | Build system | Runtime | Download |
| --- | --- | --- | --- |
| C / GTK | Meson | GNOME | [YAML](pathname:///manifest-templates/c-gtk.yaml) · [JSON](pathname:///manifest-templates/c-gtk.json) |
| C++ / Qt | CMake | KDE | [YAML](pathname:///manifest-templates/cpp-qt.yaml) · [JSON](pathname:///manifest-templates/cpp-qt.json) |
| Python / GTK | Meson | GNOME | [YAML](pathname:///manifest-templates/python-gtk.yaml) · [JSON](pathname:///manifest-templates/python-gtk.json) |
| Rust | cargo | Freedesktop | [YAML](pathname:///manifest-templates/rust.yaml) · [JSON](pathname:///manifest-templates/rust.json) |
| Go | go build | Freedesktop | [YAML](pathname:///manifest-templates/go.yaml) · [JSON](pathname:///manifest-templates/go.json) |
| Electron / Node.js | npm + BaseApp | Freedesktop | [YAML](pathname:///manifest-templates/electron.yaml) · [JSON](pathname:///manifest-templates/electron.json) |
| Vala | Meson | GNOME | [YAML](pathname:///manifest-templates/vala.yaml) · [JSON](pathname:///manifest-templates/vala.json) |
| Java | OpenJDK extension | Freedesktop | [YAML](pathname:///manifest-templates/java.yaml) · [JSON](pathname:///manifest-templates/java.json) |
| C# / .NET | dotnet extension | Freedesktop | [YAML](pathname:///manifest-templates/dotnet.yaml) · [JSON](pathname:///manifest-templates/dotnet.json) |
| Flutter | flatpak-flutter | Freedesktop | [YAML](pathname:///manifest-templates/flutter.yaml) · [JSON](pathname:///manifest-templates/flutter.json) |
| Tauri | cargo + npm | GNOME | [YAML](pathname:///manifest-templates/tauri.yaml) · [JSON](pathname:///manifest-templates/tauri.json) |
| Ruby | bundler | Freedesktop | [YAML](pathname:///manifest-templates/ruby.yaml) · [JSON](pathname:///manifest-templates/ruby.json) |

## Generating offline dependency sources

Flatpak builds have **no network access**, so package-manager dependencies must
be fetched up front into a sources file the manifest references:

- **Rust** — [flatpak-cargo-generator](https://github.com/flatpak/flatpak-builder-tools/tree/master/cargo) → `cargo-sources.json`
- **Node.js / Electron / Tauri** — [flatpak-node-generator](https://github.com/flatpak/flatpak-builder-tools/tree/master/node) → `generated-sources.json` / `node-sources.json`
- **Python** — [flatpak-pip-generator](https://github.com/flatpak/flatpak-builder-tools/tree/master/pip) → `python3-modules.json`
- **.NET** — [flatpak-dotnet-generator](https://github.com/flatpak/flatpak-builder-tools/tree/master/dotnet) → `nuget-sources.json`
- **Flutter** — [flatpak-flutter](https://github.com/TheAppgineer/flatpak-flutter) → Flutter SDK + pub sources
- **Go** — commit a `vendor/` directory (`go mod vendor`) and build with `-mod=vendor`
- **Ruby** — commit `vendor/cache` (`bundle package`) and `bundle install --local`

See also [Shared modules](/docs/for-app-authors/shared-modules) for common
dependencies and the [Linter](/docs/for-app-authors/linter) for what the build
checks before merge.
