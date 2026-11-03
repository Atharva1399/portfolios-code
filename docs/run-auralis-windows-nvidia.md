---
title: Run Auralis on Windows with an NVIDIA GPU
description: "[WRITE: one-sentence description of this task, used for search results and link previews]"
type: Task
order: 1
---

## Overview

[WRITE: what this guide helps the reader do, and who it's for]

## Before you begin

[WRITE: what the reader needs before starting]

- [WRITE: requirement, for example OS version]
- [WRITE: requirement, for example GPU and driver version]
- [WRITE: requirement, for example Python version]

> [!NOTE]
> [WRITE: note, for example how much GPU memory the setup needs]

## Steps

1. [WRITE: step 1]

   ```powershell
   # [ADD: command for step 1]
   ```

2. [WRITE: step 2]

   ```powershell
   # [ADD: command for step 2]
   ```

3. [WRITE: step 3]

   ```powershell
   # [ADD: command for step 3]
   ```

> [!TIP]
> [WRITE: tip]

## Verify it works

[WRITE: how the reader confirms that Auralis runs on the GPU]

```powershell
# [ADD: verification command]
```

[WRITE: expected output]

## Troubleshooting

### CUDA crash with float16

[WRITE: symptom: what the reader sees when the float16 crash happens]

[WRITE: cause]

[WRITE: fix: switch the dtype from float16 to bfloat16]

```python
# [ADD: the float16 -> bfloat16 change]
```

> [!WARNING]
> [WRITE: warning, for example which GPUs support bfloat16]

### [WRITE: another problem]

[WRITE: symptom, cause and fix]

## Related topics

- [Release notes: Auralis](/docs/auralis-release-notes)
- [How hybrid search ranks results](/docs/how-hybrid-search-ranks-results)
- [WRITE: related topic]
