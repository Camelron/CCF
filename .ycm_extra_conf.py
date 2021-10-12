# This file is included to avoid using the compile_commands.json from CMake
# because there is a bug in clangd that crashes when parsing the source files.
#
# The crash is visible from both Vim and VS Code, and we guess it has to do
# with different files using/not using -fnostdinc++ and/or the openenclave
# system headers (see below).
#
# This is the file that makes it work (more or less) for Vim.
# In VS Code, you can update the IntelliSense to not read compile_commands.json
# and add the compiler flags below.

import os
import ycm_core

# These are the compilation flags that will be used in case there's no
# compilation database set (by default, one is not set).
# CHANGE THIS LIST OF FLAGS. YES, THIS IS THE DROID YOU HAVE BEEN LOOKING FOR.
flags = [
'-Wall',
'-Wextra',
'-Werror',
'-fexceptions',
'-x',
'c++',
'-DENABLE_BFT',
'-D_FORTIFY_SOURCE=2',
'-DINSIDE_ENCLAVE',
'-DVIRTUAL_ENCLAVE',
'-D_LIBCPP_HAS_THREAD_API_PTHREAD',
'-I',
'include',
'-I',
'src',
'-I',
'build-v8/install/include',
'-isystem',
'3rdparty/test',
'-isystem',
'3rdparty/exported',
'-isystem',
'3rdparty/internal',
# This also crashes clangd
#'-isystem',
#'/opt/openenclave/include',
'-O2',
'-g',
'-DNDEBUG',
'-stdlib=libc++',
'-fstack-protector-strong',
'-std=gnu++2a'
]

### DO NOT CHANGE ANYTHING BELOW!!

# Set this to the absolute path to the folder (NOT the file!) containing the
# compile_commands.json file to use that instead of 'flags'. See here for
# more details: http://clang.llvm.org/docs/JSONCompilationDatabase.html
#
# Most projects will NOT need to set this to anything; you can just change the
# 'flags' list of compilation flags.
compilation_database_folder = ''

if os.path.exists( compilation_database_folder ):
  database = ycm_core.CompilationDatabase( compilation_database_folder )
else:
  database = None

SOURCE_EXTENSIONS = [ '.cpp', '.cxx', '.cc', '.c', '.m', '.mm' ]

def DirectoryOfThisScript():
  return os.path.dirname( os.path.abspath( __file__ ) )


def IsHeaderFile( filename ):
  extension = os.path.splitext( filename )[ 1 ]
  return extension in [ '.h', '.hxx', '.hpp', '.hh' ]


def GetCompilationInfoForFile( filename ):
  # The compilation_commands.json file generated by CMake does not have entries
  # for header files. So we do our best by asking the db for flags for a
  # corresponding source file, if any. If one exists, the flags for that file
  # should be good enough.
  if IsHeaderFile( filename ):
    basename = os.path.splitext( filename )[ 0 ]
    for extension in SOURCE_EXTENSIONS:
      replacement_file = basename + extension
      if os.path.exists( replacement_file ):
        compilation_info = database.GetCompilationInfoForFile(
          replacement_file )
        if compilation_info.compiler_flags_:
          return compilation_info
    return None
  return database.GetCompilationInfoForFile( filename )


# This is the entry point; this function is called by ycmd to produce flags for
# a file.
def Settings( **kwargs ):
  if not database:
    return {
      'flags': flags,
      'include_paths_relative_to_dir': DirectoryOfThisScript()
    }
  filename = kwargs[ 'filename' ]
  compilation_info = GetCompilationInfoForFile( filename )
  if not compilation_info:
    return None

  # Bear in mind that compilation_info.compiler_flags_ does NOT return a
  # python list, but a "list-like" StringVec object.
  return {
    'flags': list( compilation_info.compiler_flags_ ),
    'include_paths_relative_to_dir': compilation_info.compiler_working_dir_
  }
