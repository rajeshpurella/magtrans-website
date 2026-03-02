# Run from repo root (d:\magtrans) or from the folder that contains "Cooling Tower & Air Dryer"
# Usage: .\scripts\rename-cooling-tower-images.ps1

$ErrorActionPreference = "Stop"

$oldFolder = "Cooling Tower & Air Dryer"
$newFolder = "cooling-tower-air-dryer"

$renames = @(
    @{ Old = "Round Type Cooling Tower (MTR).avif"; New = "mtr-round-type-cooling-tower.avif" },
    @{ Old = "MTS Series (Square Type Cooling Tower).avif"; New = "mts-square-type-cooling-tower.avif" },
    @{ Old = "MTC (Cross Flow And Double Cross Flow).avif"; New = "mtc-cross-flow-double-cross-flow.avif" },
    @{ Old = "MTW - Wooden Cooling Tower.avif"; New = "mtw-wooden-cooling-tower.avif" },
    @{ Old = "MTD - Dry Cooling Tower.avif"; New = "mtd-dry-cooling-tower.avif" },
    @{ Old = "AIR DRYER.avif"; New = "air-dryer.avif" },
    @{ Old = "HEAT EXCHANGER.avif"; New = "heat-exchanger.avif" }
)

# Try public\products first, then public
$base = $null
if (Test-Path "public\products\$oldFolder") { $base = "public\products" }
elseif (Test-Path "public\$oldFolder") { $base = "public" }
elseif (Test-Path $oldFolder) { $base = "." }
else { Write-Host "Folder '$oldFolder' not found in public\products, public, or current dir."; exit 1 }

$oldPath = Join-Path $base $oldFolder
$newPath = Join-Path $base $newFolder

if (Test-Path $newPath) { Write-Host "Target folder already exists: $newPath"; exit 1 }
New-Item -ItemType Directory -Path $newPath -Force | Out-Null

foreach ($r in $renames) {
    $src = Join-Path $oldPath $r.Old
    $dst = Join-Path $newPath $r.New
    if (Test-Path $src) {
        Copy-Item -LiteralPath $src -Destination $dst -Force
        Write-Host "OK: $($r.Old) -> $($r.New)"
    }
    else { Write-Host "Skip (not found): $($r.Old)" }
}

Write-Host "Done. New folder: $newPath"
Write-Host "You can delete the old folder manually: $oldPath"
