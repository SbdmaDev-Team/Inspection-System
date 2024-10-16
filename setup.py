from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in inspection_system/__init__.py
from inspection_system import __version__ as version

setup(
	name="inspection_system",
	version=version,
	description="inspection for sbdma",
	author="amr + yousif",
	author_email="yalhag@gmail.com",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
