// The filesystem consists of a tree of files (plain data) and directories (which can contain other directories or files). The outermost directory is called /. You can navigate around the filesystem, moving into or out of directories and listing the contents of the directory you're currently in.

// Within the terminal output, lines that begin with $ are commands you executed, very much like some modern computers:

// cd means change directory. This changes which directory is the current directory, but the specific result depends on the argument:
// cd x moves in one level: it looks in the current directory for the directory named x and makes it the current directory.
// cd .. moves out one level: it finds the directory that contains the current directory, then makes that directory the current directory.
// cd / switches the current directory to the outermost directory, /.
// ls means list. It prints out all of the files and directories immediately contained by the current directory:
// 123 abc means that the current directory contains a file named abc with size 123.
// dir xyz means that the current directory contains a directory named xyz.


// Since the disk is full, your first step should probably be to find directories that are good candidates for deletion. To do this, you need to determine the total size of each directory. The total size of a directory is the sum of the sizes of the files it contains, directly or indirectly. (Directories themselves do not count as having any intrinsic size.)

// The total sizes of the directories above can be found as follows:

// The total size of directory e is 584 because it contains a single file i of size 584 and no other directories.
// The directory a has total size 94853 because it contains files f (size 29116), g (size 2557), and h.lst (size 62596), plus file i indirectly (a contains e which contains i).
// Directory d has total size 24933642.
// As the outermost directory, / contains every file. Its total size is 48381165, the sum of the size of every file.
// To begin, find all of the directories with a total size of at most 100000, then calculate the sum of their total sizes. In the example above, these directories are a and e; the sum of their total sizes is 95437 (94853 + 584). (As in this example, this process can count files more than once!)

// Find all of the directories with a total size of at most 100000. What is the sum of the total sizes of those directories?


// Part one
// add all files to root directory


function addFiles(data, index=0, name = "/") {
    class Folder{
        constructor(name){
            this.name=name,
            this.size=0,
            this.files=[]
        }
    }
    const folder = new Folder(name)
    const subfolders = []
    for (i=index; i < input.length; i++) {
        let curr = input[i]
        if (curr[0] === "$") {
            if (curr[1] === "cd") {
                if (curr[2] === "..") {
                    return { files: folder, next: i, folders: subfolders };
                } else if (curr[2] !== "/") {
                    let { files, next, folders } = addFiles(input, i + 1, curr[2]);
                    subfolders.push(files);
                    subfolders.push(...folders);
                    i = next;
                    if (files) {
                        folder.files.push(files);
                        folder.size += files.size;
                    }
                }
            }
        } else if (!isNaN(curr[0])) {
            folder.size += parseInt(curr[0]);
            folder.files.push({
                name: curr[1],
                size: parseInt(curr[0]),
            });
        }
    }
    return { files: folder, next: i, folders: subfolders };
}

// find sum of All files less than 100000

const allFiles = addFiles(input)
allFiles.folders.sort((a, b) => a.size - b.size).reduce((a, c) => c.size < 100000?a+c.size:a, 0) //1297159


// part Two

// The total disk space available to the filesystem is 70000000. To run the update, you need unused space of at least 30000000. You need to find a directory you can delete that will free up enough space to run the update.

// Find the smallest directory that, if deleted, would free up enough space on the filesystem to run the update. What is the total size of that directory?

let currentFileSize = allFiles.files.size

let freeSpace = 70000000-allFiles.files.size
let needs = 30000000-freeSpace
//ans
allFiles.folders.find(dir => dir.size >= needs)
// size: 3866390