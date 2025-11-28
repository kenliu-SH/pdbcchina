import __main__
__main__.pymol_argv = [ 'pymol', '-qc'] # Quiet and no GUI
import sys
import sys, time, os
import pymol
pymol.finish_launching()
def create_protein_screenshot(input_file, output_file, rotation_angles):
    pymol.finish_launching()
    pymol.cmd.load(input_file, "protein")

    pymol.cmd.bg_color("white")
    pymol.cmd.zoom()
    pymol.cmd.show("cartoon")

    pymol.cmd.rotate("x", rotation_angles[0], "protein")
    pymol.cmd.rotate("y", rotation_angles[1], "protein")
    pymol.cmd.rotate("z", rotation_angles[2], "protein")

    pymol.cmd.png(output_file, ray=1)
    print("Saved screenshot to %s" % output_file)
    pymol.cmd.quit()

if __name__ == "__main__":
    input_file = sys.argv[1]
    output_file = sys.argv[2]
    rotation_angles = (45, 30, 60)
    create_protein_screenshot(input_file, output_file, rotation_angles)