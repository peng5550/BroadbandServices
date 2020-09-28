import sys
import os.path
from cx_Freeze import setup, Executable

# Dependencies are automatically detected, but it might need fine tuning.
PYTHON_INSTALL_DIR = os.path.dirname(os.path.dirname(os.__file__))
os.environ['TCL_LIBRARY'] = os.path.join(PYTHON_INSTALL_DIR, 'tcl', 'tcl8.6')
os.environ['TK_LIBRARY'] = os.path.join(PYTHON_INSTALL_DIR, 'tcl', 'tk8.6')

# Dependencies are automatically detected, but it might need fine tuning.
build_exe_options = {"packages": ["os", "tkinter", "datetime", "aiohttp", "openpyxl", "mttkinter", "random", "asyncio", "threading", "json", "urllib"],
                     "includes": ["tkinter"],
                     'include_files': [
                         os.path.join(os.path.dirname(__file__), 'app.ico'),
                         os.path.join(PYTHON_INSTALL_DIR, 'DLLs', 'tcl86t.dll'),
                         os.path.join(PYTHON_INSTALL_DIR, 'DLLs', 'tk86t.dll'),
                     ]
                     }

# GUI applications require a different base on Windows (the default is for a
# console application)
base = None
if sys.platform == "win32":
    base = "Win32GUI"

# "bdist_msi": bdist_msi_options
setup(name="BDtools",
      version="3.0",
      description="中国移动中国联通宽带查询工具",
      options={"build_exe": build_exe_options},
      executables=[Executable("broadbandHelper.py",
                              shortcutName="宽带查询工具3.0",
                              shortcutDir="DesktopFolder",
                              base=base,
                              icon="app.ico")])
