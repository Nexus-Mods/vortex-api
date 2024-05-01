[vortex_devel](../README.md) / [Exports](../modules.md) / [fs](fs.md) / constants

# Namespace: constants

[fs](fs.md).constants

## Table of contents

### Variables

- [COPYFILE\_EXCL](fs.constants.md#copyfile_excl)
- [COPYFILE\_FICLONE](fs.constants.md#copyfile_ficlone)
- [COPYFILE\_FICLONE\_FORCE](fs.constants.md#copyfile_ficlone_force)
- [F\_OK](fs.constants.md#f_ok)
- [O\_APPEND](fs.constants.md#o_append)
- [O\_CREAT](fs.constants.md#o_creat)
- [O\_DIRECT](fs.constants.md#o_direct)
- [O\_DIRECTORY](fs.constants.md#o_directory)
- [O\_DSYNC](fs.constants.md#o_dsync)
- [O\_EXCL](fs.constants.md#o_excl)
- [O\_NOATIME](fs.constants.md#o_noatime)
- [O\_NOCTTY](fs.constants.md#o_noctty)
- [O\_NOFOLLOW](fs.constants.md#o_nofollow)
- [O\_NONBLOCK](fs.constants.md#o_nonblock)
- [O\_RDONLY](fs.constants.md#o_rdonly)
- [O\_RDWR](fs.constants.md#o_rdwr)
- [O\_SYMLINK](fs.constants.md#o_symlink)
- [O\_SYNC](fs.constants.md#o_sync)
- [O\_TRUNC](fs.constants.md#o_trunc)
- [O\_WRONLY](fs.constants.md#o_wronly)
- [R\_OK](fs.constants.md#r_ok)
- [S\_IFBLK](fs.constants.md#s_ifblk)
- [S\_IFCHR](fs.constants.md#s_ifchr)
- [S\_IFDIR](fs.constants.md#s_ifdir)
- [S\_IFIFO](fs.constants.md#s_ififo)
- [S\_IFLNK](fs.constants.md#s_iflnk)
- [S\_IFMT](fs.constants.md#s_ifmt)
- [S\_IFREG](fs.constants.md#s_ifreg)
- [S\_IFSOCK](fs.constants.md#s_ifsock)
- [S\_IRGRP](fs.constants.md#s_irgrp)
- [S\_IROTH](fs.constants.md#s_iroth)
- [S\_IRUSR](fs.constants.md#s_irusr)
- [S\_IRWXG](fs.constants.md#s_irwxg)
- [S\_IRWXO](fs.constants.md#s_irwxo)
- [S\_IRWXU](fs.constants.md#s_irwxu)
- [S\_IWGRP](fs.constants.md#s_iwgrp)
- [S\_IWOTH](fs.constants.md#s_iwoth)
- [S\_IWUSR](fs.constants.md#s_iwusr)
- [S\_IXGRP](fs.constants.md#s_ixgrp)
- [S\_IXOTH](fs.constants.md#s_ixoth)
- [S\_IXUSR](fs.constants.md#s_ixusr)
- [UV\_FS\_O\_FILEMAP](fs.constants.md#uv_fs_o_filemap)
- [W\_OK](fs.constants.md#w_ok)
- [X\_OK](fs.constants.md#x_ok)

## Variables

### COPYFILE\_EXCL

• **COPYFILE\_EXCL**: `number`

Constant for fs.copyFile. Flag indicating the destination file should not be overwritten if it already exists.

#### Defined in

E:/WorkC/vortex/node_modules/@types/node/fs.d.ts:3078

___

### COPYFILE\_FICLONE

• **COPYFILE\_FICLONE**: `number`

Constant for fs.copyFile. copy operation will attempt to create a copy-on-write reflink.
If the underlying platform does not support copy-on-write, then a fallback copy mechanism is used.

#### Defined in

E:/WorkC/vortex/node_modules/@types/node/fs.d.ts:3083

___

### COPYFILE\_FICLONE\_FORCE

• **COPYFILE\_FICLONE\_FORCE**: `number`

Constant for fs.copyFile. Copy operation will attempt to create a copy-on-write reflink.
If the underlying platform does not support copy-on-write, then the operation will fail with an error.

#### Defined in

E:/WorkC/vortex/node_modules/@types/node/fs.d.ts:3088

___

### F\_OK

• **F\_OK**: `number`

Constant for fs.access(). File is visible to the calling process.

#### Defined in

E:/WorkC/vortex/node_modules/@types/node/fs.d.ts:3069

___

### O\_APPEND

• **O\_APPEND**: `number`

Constant for fs.open(). Flag indicating that data will be appended to the end of the file.

#### Defined in

E:/WorkC/vortex/node_modules/@types/node/fs.d.ts:3109

___

### O\_CREAT

• **O\_CREAT**: `number`

Constant for fs.open(). Flag indicating to create the file if it does not already exist.

#### Defined in

E:/WorkC/vortex/node_modules/@types/node/fs.d.ts:3097

___

### O\_DIRECT

• **O\_DIRECT**: `number`

Constant for fs.open(). When set, an attempt will be made to minimize caching effects of file I/O.

#### Defined in

E:/WorkC/vortex/node_modules/@types/node/fs.d.ts:3128

___

### O\_DIRECTORY

• **O\_DIRECTORY**: `number`

Constant for fs.open(). Flag indicating that the open should fail if the path is not a directory.

#### Defined in

E:/WorkC/vortex/node_modules/@types/node/fs.d.ts:3111

___

### O\_DSYNC

• **O\_DSYNC**: `number`

Constant for fs.open(). Flag indicating that the file is opened for synchronous I/O with write operations waiting for data integrity.

#### Defined in

E:/WorkC/vortex/node_modules/@types/node/fs.d.ts:3124

___

### O\_EXCL

• **O\_EXCL**: `number`

Constant for fs.open(). Flag indicating that opening a file should fail if the O_CREAT flag is set and the file already exists.

#### Defined in

E:/WorkC/vortex/node_modules/@types/node/fs.d.ts:3099

___

### O\_NOATIME

• **O\_NOATIME**: `number`

constant for fs.open().
Flag indicating reading accesses to the file system will no longer result in
an update to the atime information associated with the file.
This flag is available on Linux operating systems only.

#### Defined in

E:/WorkC/vortex/node_modules/@types/node/fs.d.ts:3118

___

### O\_NOCTTY

• **O\_NOCTTY**: `number`

Constant for fs.open(). Flag indicating that if path identifies a terminal device,
opening the path shall not cause that terminal to become the controlling terminal for the process
(if the process does not already have one).

#### Defined in

E:/WorkC/vortex/node_modules/@types/node/fs.d.ts:3105

___

### O\_NOFOLLOW

• **O\_NOFOLLOW**: `number`

Constant for fs.open(). Flag indicating that the open should fail if the path is a symbolic link.

#### Defined in

E:/WorkC/vortex/node_modules/@types/node/fs.d.ts:3120

___

### O\_NONBLOCK

• **O\_NONBLOCK**: `number`

Constant for fs.open(). Flag indicating to open the file in nonblocking mode when possible.

#### Defined in

E:/WorkC/vortex/node_modules/@types/node/fs.d.ts:3130

___

### O\_RDONLY

• **O\_RDONLY**: `number`

Constant for fs.open(). Flag indicating to open a file for read-only access.

#### Defined in

E:/WorkC/vortex/node_modules/@types/node/fs.d.ts:3091

___

### O\_RDWR

• **O\_RDWR**: `number`

Constant for fs.open(). Flag indicating to open a file for read-write access.

#### Defined in

E:/WorkC/vortex/node_modules/@types/node/fs.d.ts:3095

___

### O\_SYMLINK

• **O\_SYMLINK**: `number`

Constant for fs.open(). Flag indicating to open the symbolic link itself rather than the resource it is pointing to.

#### Defined in

E:/WorkC/vortex/node_modules/@types/node/fs.d.ts:3126

___

### O\_SYNC

• **O\_SYNC**: `number`

Constant for fs.open(). Flag indicating that the file is opened for synchronous I/O.

#### Defined in

E:/WorkC/vortex/node_modules/@types/node/fs.d.ts:3122

___

### O\_TRUNC

• **O\_TRUNC**: `number`

Constant for fs.open(). Flag indicating that if the file exists and is a regular file, and the file is opened successfully for write access, its length shall be truncated to zero.

#### Defined in

E:/WorkC/vortex/node_modules/@types/node/fs.d.ts:3107

___

### O\_WRONLY

• **O\_WRONLY**: `number`

Constant for fs.open(). Flag indicating to open a file for write-only access.

#### Defined in

E:/WorkC/vortex/node_modules/@types/node/fs.d.ts:3093

___

### R\_OK

• **R\_OK**: `number`

Constant for fs.access(). File can be read by the calling process.

#### Defined in

E:/WorkC/vortex/node_modules/@types/node/fs.d.ts:3071

___

### S\_IFBLK

• **S\_IFBLK**: `number`

Constant for fs.Stats mode property for determining a file's type. File type constant for a block-oriented device file.

#### Defined in

E:/WorkC/vortex/node_modules/@types/node/fs.d.ts:3141

___

### S\_IFCHR

• **S\_IFCHR**: `number`

Constant for fs.Stats mode property for determining a file's type. File type constant for a character-oriented device file.

#### Defined in

E:/WorkC/vortex/node_modules/@types/node/fs.d.ts:3139

___

### S\_IFDIR

• **S\_IFDIR**: `number`

Constant for fs.Stats mode property for determining a file's type. File type constant for a directory.

#### Defined in

E:/WorkC/vortex/node_modules/@types/node/fs.d.ts:3137

___

### S\_IFIFO

• **S\_IFIFO**: `number`

Constant for fs.Stats mode property for determining a file's type. File type constant for a FIFO/pipe.

#### Defined in

E:/WorkC/vortex/node_modules/@types/node/fs.d.ts:3143

___

### S\_IFLNK

• **S\_IFLNK**: `number`

Constant for fs.Stats mode property for determining a file's type. File type constant for a symbolic link.

#### Defined in

E:/WorkC/vortex/node_modules/@types/node/fs.d.ts:3145

___

### S\_IFMT

• **S\_IFMT**: `number`

Constant for fs.Stats mode property for determining a file's type. Bit mask used to extract the file type code.

#### Defined in

E:/WorkC/vortex/node_modules/@types/node/fs.d.ts:3133

___

### S\_IFREG

• **S\_IFREG**: `number`

Constant for fs.Stats mode property for determining a file's type. File type constant for a regular file.

#### Defined in

E:/WorkC/vortex/node_modules/@types/node/fs.d.ts:3135

___

### S\_IFSOCK

• **S\_IFSOCK**: `number`

Constant for fs.Stats mode property for determining a file's type. File type constant for a socket.

#### Defined in

E:/WorkC/vortex/node_modules/@types/node/fs.d.ts:3147

___

### S\_IRGRP

• **S\_IRGRP**: `number`

Constant for fs.Stats mode property for determining access permissions for a file. File mode indicating readable by group.

#### Defined in

E:/WorkC/vortex/node_modules/@types/node/fs.d.ts:3160

___

### S\_IROTH

• **S\_IROTH**: `number`

Constant for fs.Stats mode property for determining access permissions for a file. File mode indicating readable by others.

#### Defined in

E:/WorkC/vortex/node_modules/@types/node/fs.d.ts:3168

___

### S\_IRUSR

• **S\_IRUSR**: `number`

Constant for fs.Stats mode property for determining access permissions for a file. File mode indicating readable by owner.

#### Defined in

E:/WorkC/vortex/node_modules/@types/node/fs.d.ts:3152

___

### S\_IRWXG

• **S\_IRWXG**: `number`

Constant for fs.Stats mode property for determining access permissions for a file. File mode indicating readable, writable and executable by group.

#### Defined in

E:/WorkC/vortex/node_modules/@types/node/fs.d.ts:3158

___

### S\_IRWXO

• **S\_IRWXO**: `number`

Constant for fs.Stats mode property for determining access permissions for a file. File mode indicating readable, writable and executable by others.

#### Defined in

E:/WorkC/vortex/node_modules/@types/node/fs.d.ts:3166

___

### S\_IRWXU

• **S\_IRWXU**: `number`

Constant for fs.Stats mode property for determining access permissions for a file. File mode indicating readable, writable and executable by owner.

#### Defined in

E:/WorkC/vortex/node_modules/@types/node/fs.d.ts:3150

___

### S\_IWGRP

• **S\_IWGRP**: `number`

Constant for fs.Stats mode property for determining access permissions for a file. File mode indicating writable by group.

#### Defined in

E:/WorkC/vortex/node_modules/@types/node/fs.d.ts:3162

___

### S\_IWOTH

• **S\_IWOTH**: `number`

Constant for fs.Stats mode property for determining access permissions for a file. File mode indicating writable by others.

#### Defined in

E:/WorkC/vortex/node_modules/@types/node/fs.d.ts:3170

___

### S\_IWUSR

• **S\_IWUSR**: `number`

Constant for fs.Stats mode property for determining access permissions for a file. File mode indicating writable by owner.

#### Defined in

E:/WorkC/vortex/node_modules/@types/node/fs.d.ts:3154

___

### S\_IXGRP

• **S\_IXGRP**: `number`

Constant for fs.Stats mode property for determining access permissions for a file. File mode indicating executable by group.

#### Defined in

E:/WorkC/vortex/node_modules/@types/node/fs.d.ts:3164

___

### S\_IXOTH

• **S\_IXOTH**: `number`

Constant for fs.Stats mode property for determining access permissions for a file. File mode indicating executable by others.

#### Defined in

E:/WorkC/vortex/node_modules/@types/node/fs.d.ts:3172

___

### S\_IXUSR

• **S\_IXUSR**: `number`

Constant for fs.Stats mode property for determining access permissions for a file. File mode indicating executable by owner.

#### Defined in

E:/WorkC/vortex/node_modules/@types/node/fs.d.ts:3156

___

### UV\_FS\_O\_FILEMAP

• **UV\_FS\_O\_FILEMAP**: `number`

When set, a memory file mapping is used to access the file. This flag
is available on Windows operating systems only. On other operating systems,
this flag is ignored.

#### Defined in

E:/WorkC/vortex/node_modules/@types/node/fs.d.ts:3178

___

### W\_OK

• **W\_OK**: `number`

Constant for fs.access(). File can be written by the calling process.

#### Defined in

E:/WorkC/vortex/node_modules/@types/node/fs.d.ts:3073

___

### X\_OK

• **X\_OK**: `number`

Constant for fs.access(). File can be executed by the calling process.

#### Defined in

E:/WorkC/vortex/node_modules/@types/node/fs.d.ts:3075
