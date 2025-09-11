# SWE 3022 Group 10

## Week3

| | 김태림 | 복재민 | 안나영 | 이석원 | 이승환 | 이태영 | 임지훈 | 정동훈 | 채민지 | 
|-|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|
|1|       |       |       |       |       |       |       |       |       |
|2|       |       |       |       |       |       |       |       |       |
|3|       |       |       |       |       |       |       |       |       |
|4|       |       |       |       |       |       |       |       |       |

## MARP

### Overview
Marp (Markdown Presentation Ecosystem) provides an intuitive presentation builder for developers. It is compatible with not only Markdown but also HTML and CSS components. Markdown should be sufficient for most of our assignment needs.

### Git Workflow
To prevent merge conflicts, please work on separate files for each assignment problem. **DO NOT FORGET TO PULL AND PUSH** before and after editing markdown files.

## Multi-file Support
The Marp community does not natively support building slides from multiple files. To work around this limitation, we need to install an external Marp plugin that can compile and merge multiple markdown files into a single slide deck. 

The final compilation and submission will be handled by me (Donghun Jung), so you do not have to care about it, but if you want to compile locally, you'll need to install [this plugin](https://github.com/camelaissani/markdown-it-include).


### Installation

#### Marp for VS Code (Recommended for Editing)
[VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=marp-team.marp-vscode)

Create slide decks written in Marp Markdown directly in VS Code.

#### Marp CLI (Required to compliation)
[GitHub Repository](https://github.com/marp-team/marp-cli)

A CLI interface for Marp and Marpit based converters.

### Compilation Commands

#### Using Makefile (Recommended for Project)
For this project, we have a configured `Makefile` that simplifies the compilation process. The `Makefile` uses our custom engine setup and automatically generates files with proper naming conventions.

**Setup (One-time):**
Before executing the `Makefile`, you need to install dependencies in the `.engine` directory:

```bash
cd .engine
npm install
```

**Usage:**
```bash
# Generate PPTX file
make pptx No=01 Date=20250910

# Generate PDF file  
make pdf No=01 Date=20250910
```

#### Standard Marp CLI Commands

##### Convert to PDF document (`--pdf`) 

If you passed `--pdf` option or the output filename specified by `--output (-o)` option ends with .pdf, Marp CLI will try to convert Markdown into PDF file through the browser.

```bash
marp --pdf slide-deck.md
marp slide-deck.md -o converted.pdf
```
##### Convert to PowerPoint document (`--pptx`) 

Do you want more familiar way to present and share your deck? PPTX conversion to create PowerPoint document is available by passing `--pptx` option or specify the output path with PPTX extension.

```bash
marp --pptx slide-deck.md
marp slide-deck.md -o converted.pptx
```

A created PPTX includes rendered Marp slide pages and the support of [Marpit presenter notes]. It can open with PowerPoint, Keynote, Google Slides, LibreOffice Impress, and so on...


##### *[EXPERIMENTAL]* Generate editable pptx (`--pptx-editable`)

A converted PPTX usually consists of pre-rendered background images, that is meaning **contents cannot to modify or re-use** in PowerPoint. If you want to generate editable PPTX for modifying texts, shapes, and images in GUI, you can pass `--pptx-editable` option together with `--pptx` option.

```bash
marp --pptx --pptx-editable slide-deck.md
```

> [!IMPORTANT]
>
> The experimental `--pptx-editable` option requires installing both of the browser and [LibreOffice Impress](https://www.libreoffice.org/).
>
> If the theme and inline styles are providing complex styles into the slide, **`--pptx-editable` may throw an error or output the incomplete result.** (e.g. `gaia` theme in Marp Core)

> [!WARNING]
>
> Conversion to the editable PPTX results in **lower slide reproducibility compared to the conversion into regular PPTX and other formats.** Additionally, **presenter notes are not supported.** *We do not recommend to export the editable PPTX if maintaining the slide's appearance is important.*
