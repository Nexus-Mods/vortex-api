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

• `Const` **COPYFILE\_EXCL**: *number*

Constant for fs.copyFile. Flag indicating the destination file should not be overwritten if it already exists.

Defined in: node_modules/@types/node/fs.d.ts:1620

___

### COPYFILE\_FICLONE

• `Const` **COPYFILE\_FICLONE**: *number*

Constant for fs.copyFile. copy operation will attempt to create a copy-on-write reflink.
If the underlying platform does not support copy-on-write, then a fallback copy mechanism is used.

Defined in: node_modules/@types/node/fs.d.ts:1626

___

### COPYFILE\_FICLONE\_FORCE

• `Const` **COPYFILE\_FICLONE\_FORCE**: *number*

Constant for fs.copyFile. Copy operation will attempt to create a copy-on-write reflink.
If the underlying platform does not support copy-on-write, then the operation will fail with an error.

Defined in: node_modules/@types/node/fs.d.ts:1632

___

### F\_OK

• `Const` **F\_OK**: *number*

Constant for fs.access(). File is visible to the calling process.

Defined in: node_modules/@types/node/fs.d.ts:1606

___

### O\_APPEND

• `Const` **O\_APPEND**: *number*

Constant for fs.open(). Flag indicating that data will be appended to the end of the file.

Defined in: node_modules/@types/node/fs.d.ts:1662

___

### O\_CREAT

• `Const` **O\_CREAT**: *number*

Constant for fs.open(). Flag indicating to create the file if it does not already exist.

Defined in: node_modules/@types/node/fs.d.ts:1646

___

### O\_DIRECT

• `Const` **O\_DIRECT**: *number*

Constant for fs.open(). When set, an attempt will be made to minimize caching effects of file I/O.

Defined in: node_modules/@types/node/fs.d.ts:1688

___

### O\_DIRECTORY

• `Const` **O\_DIRECTORY**: *number*

Constant for fs.open(). Flag indicating that the open should fail if the path is not a directory.

Defined in: node_modules/@types/node/fs.d.ts:1665

___

### O\_DSYNC

• `Const` **O\_DSYNC**: *number*

Constant for fs.open(). Flag indicating that the file is opened for synchronous I/O with write operations waiting for data integrity.

Defined in: node_modules/@types/node/fs.d.ts:1682

___

### O\_EXCL

• `Const` **O\_EXCL**: *number*

Constant for fs.open(). Flag indicating that opening a file should fail if the O_CREAT flag is set and the file already exists.

Defined in: node_modules/@types/node/fs.d.ts:1649

___

### O\_NOATIME

• `Const` **O\_NOATIME**: *number*

constant for fs.open().
Flag indicating reading accesses to the file system will no longer result in
an update to the atime information associated with the file.
This flag is available on Linux operating systems only.

Defined in: node_modules/@types/node/fs.d.ts:1673

___

### O\_NOCTTY

• `Const` **O\_NOCTTY**: *number*

Constant for fs.open(). Flag indicating that if path identifies a terminal device,
opening the path shall not cause that terminal to become the controlling terminal for the process
(if the process does not already have one).

Defined in: node_modules/@types/node/fs.d.ts:1656

___

### O\_NOFOLLOW

• `Const` **O\_NOFOLLOW**: *number*

Constant for fs.open(). Flag indicating that the open should fail if the path is a symbolic link.

Defined in: node_modules/@types/node/fs.d.ts:1676

___

### O\_NONBLOCK

• `Const` **O\_NONBLOCK**: *number*

Constant for fs.open(). Flag indicating to open the file in nonblocking mode when possible.

Defined in: node_modules/@types/node/fs.d.ts:1691

___

### O\_RDONLY

• `Const` **O\_RDONLY**: *number*

Constant for fs.open(). Flag indicating to open a file for read-only access.

Defined in: node_modules/@types/node/fs.d.ts:1637

___

### O\_RDWR

• `Const` **O\_RDWR**: *number*

Constant for fs.open(). Flag indicating to open a file for read-write access.

Defined in: node_modules/@types/node/fs.d.ts:1643

___

### O\_SYMLINK

• `Const` **O\_SYMLINK**: *number*

Constant for fs.open(). Flag indicating to open the symbolic link itself rather than the resource it is pointing to.

Defined in: node_modules/@types/node/fs.d.ts:1685

___

### O\_SYNC

• `Const` **O\_SYNC**: *number*

Constant for fs.open(). Flag indicating that the file is opened for synchronous I/O.

Defined in: node_modules/@types/node/fs.d.ts:1679

___

### O\_TRUNC

• `Const` **O\_TRUNC**: *number*

Constant for fs.open(). Flag indicating that if the file exists and is a regular file, and the file is opened successfully for write access, its length shall be truncated to zero.

Defined in: node_modules/@types/node/fs.d.ts:1659

___

### O\_WRONLY

• `Const` **O\_WRONLY**: *number*

Constant for fs.open(). Flag indicating to open a file for write-only access.

Defined in: node_modules/@types/node/fs.d.ts:1640

___

### R\_OK

• `Const` **R\_OK**: *number*

Constant for fs.access(). File can be read by the calling process.

Defined in: node_modules/@types/node/fs.d.ts:1609

___

### S\_IFBLK

• `Const` **S\_IFBLK**: *number*

Constant for fs.Stats mode property for determining a file's type. File type constant for a block-oriented device file.

Defined in: node_modules/@types/node/fs.d.ts:1708

___

### S\_IFCHR

• `Const` **S\_IFCHR**: *number*

Constant for fs.Stats mode property for determining a file's type. File type constant for a character-oriented device file.

Defined in: node_modules/@types/node/fs.d.ts:1705

___

### S\_IFDIR

• `Const` **S\_IFDIR**: *number*

Constant for fs.Stats mode property for determining a file's type. File type constant for a directory.

Defined in: node_modules/@types/node/fs.d.ts:1702

___

### S\_IFIFO

• `Const` **S\_IFIFO**: *number*

Constant for fs.Stats mode property for determining a file's type. File type constant for a FIFO/pipe.

Defined in: node_modules/@types/node/fs.d.ts:1711

___

### S\_IFLNK

• `Const` **S\_IFLNK**: *number*

Constant for fs.Stats mode property for determining a file's type. File type constant for a symbolic link.

Defined in: node_modules/@types/node/fs.d.ts:1714

___

### S\_IFMT

• `Const` **S\_IFMT**: *number*

Constant for fs.Stats mode property for determining a file's type. Bit mask used to extract the file type code.

Defined in: node_modules/@types/node/fs.d.ts:1696

___

### S\_IFREG

• `Const` **S\_IFREG**: *number*

Constant for fs.Stats mode property for determining a file's type. File type constant for a regular file.

Defined in: node_modules/@types/node/fs.d.ts:1699

___

### S\_IFSOCK

• `Const` **S\_IFSOCK**: *number*

Constant for fs.Stats mode property for determining a file's type. File type constant for a socket.

Defined in: node_modules/@types/node/fs.d.ts:1717

___

### S\_IRGRP

• `Const` **S\_IRGRP**: *number*

Constant for fs.Stats mode property for determining access permissions for a file. File mode indicating readable by group.

Defined in: node_modules/@types/node/fs.d.ts:1737

___

### S\_IROTH

• `Const` **S\_IROTH**: *number*

Constant for fs.Stats mode property for determining access permissions for a file. File mode indicating readable by others.

Defined in: node_modules/@types/node/fs.d.ts:1749

___

### S\_IRUSR

• `Const` **S\_IRUSR**: *number*

Constant for fs.Stats mode property for determining access permissions for a file. File mode indicating readable by owner.

Defined in: node_modules/@types/node/fs.d.ts:1725

___

### S\_IRWXG

• `Const` **S\_IRWXG**: *number*

Constant for fs.Stats mode property for determining access permissions for a file. File mode indicating readable, writable and executable by group.

Defined in: node_modules/@types/node/fs.d.ts:1734

___

### S\_IRWXO

• `Const` **S\_IRWXO**: *number*

Constant for fs.Stats mode property for determining access permissions for a file. File mode indicating readable, writable and executable by others.

Defined in: node_modules/@types/node/fs.d.ts:1746

___

### S\_IRWXU

• `Const` **S\_IRWXU**: *number*

Constant for fs.Stats mode property for determining access permissions for a file. File mode indicating readable, writable and executable by owner.

Defined in: node_modules/@types/node/fs.d.ts:1722

___

### S\_IWGRP

• `Const` **S\_IWGRP**: *number*

Constant for fs.Stats mode property for determining access permissions for a file. File mode indicating writable by group.

Defined in: node_modules/@types/node/fs.d.ts:1740

___

### S\_IWOTH

• `Const` **S\_IWOTH**: *number*

Constant for fs.Stats mode property for determining access permissions for a file. File mode indicating writable by others.

Defined in: node_modules/@types/node/fs.d.ts:1752

___

### S\_IWUSR

• `Const` **S\_IWUSR**: *number*

Constant for fs.Stats mode property for determining access permissions for a file. File mode indicating writable by owner.

Defined in: node_modules/@types/node/fs.d.ts:1728

___

### S\_IXGRP

• `Const` **S\_IXGRP**: *number*

Constant for fs.Stats mode property for determining access permissions for a file. File mode indicating executable by group.

Defined in: node_modules/@types/node/fs.d.ts:1743

___

### S\_IXOTH

• `Const` **S\_IXOTH**: *number*

Constant for fs.Stats mode property for determining access permissions for a file. File mode indicating executable by others.

Defined in: node_modules/@types/node/fs.d.ts:1755

___

### S\_IXUSR

• `Const` **S\_IXUSR**: *number*

Constant for fs.Stats mode property for determining access permissions for a file. File mode indicating executable by owner.

Defined in: node_modules/@types/node/fs.d.ts:1731

___

### UV\_FS\_O\_FILEMAP

• `Const` **UV\_FS\_O\_FILEMAP**: *number*

When set, a memory file mapping is used to access the file. This flag
is available on Windows operating systems only. On other operating systems,
this flag is ignored.

Defined in: node_modules/@types/node/fs.d.ts:1762

___

### W\_OK

• `Const` **W\_OK**: *number*

Constant for fs.access(). File can be written by the calling process.

Defined in: node_modules/@types/node/fs.d.ts:1612

___

### X\_OK

• `Const` **X\_OK**: *number*

Constant for fs.access(). File can be executed by the calling process.

Defined in: node_modules/@types/node/fs.d.ts:1615
