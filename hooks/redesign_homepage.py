"""
MkDocs post-build hook: promote the standalone `redesign/` page to be the
site homepage (`/`) and also expose it at `/redesign/` as a backup.

Runs automatically as part of `mkdocs build`, so any host that just runs
`mkdocs build` (e.g. Cloudflare Pages) will get the redesign deployed
without any platform-specific build command tweaks.
"""

from __future__ import annotations

import logging
import shutil
from pathlib import Path

log = logging.getLogger("mkdocs.hooks.redesign_homepage")

REPO_ROOT = Path(__file__).resolve().parent.parent
REDESIGN_DIR = REPO_ROOT / "redesign"

ROOT_FILES = ("index.html", "styles.css", "script.js")


def on_post_build(config, **kwargs) -> None:
    site_dir = Path(config["site_dir"])

    if not REDESIGN_DIR.is_dir():
        log.warning("redesign/ directory not found at %s; skipping", REDESIGN_DIR)
        return

    for name in ROOT_FILES:
        src = REDESIGN_DIR / name
        if not src.is_file():
            log.warning("redesign/%s missing; skipping", name)
            continue
        dest = site_dir / name
        shutil.copy2(src, dest)
        log.info("redesign: copied %s -> %s", src.name, dest)

    backup_dir = site_dir / "redesign"
    if backup_dir.exists():
        shutil.rmtree(backup_dir)
    shutil.copytree(REDESIGN_DIR, backup_dir)
    log.info("redesign: mirrored %s -> %s", REDESIGN_DIR, backup_dir)
