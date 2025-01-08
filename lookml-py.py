import os
from datetime import datetime

UTE_MAPPING = [
    ["Login", "biometric_login", "login"],
    ["Login", "biometric_login", "impression"],
    ["Login", "biometric_login", "error_impression"],
    ["Settings", "settings", "impression"],
    ["Settings", "notification_settings", "Impression"],
    ["Settings", "security_Settings", "impression"],
]

# Generate a LookML script to add all mapped user tracking event fields as dimensions and measures
def make_lookml():
    lookml = []

    for header, context, action in UTE_MAPPING:
        low_context = context.lower()
        low_action = action.lower()
        field_name = f"{low_context}_{low_action}".replace(".", "_").replace("-", "__").replace(" ", "___")

        dimension = f'dimension: {field_name} {{\n\thidden: yes\n\tgroup_label: "{header}"\n\ttype: number\n\tsql: ${{TABLE}}.{field_name};;\n}}\n'
        measure = f'measure: total_{field_name} {{\n\tlabel: "{context}:{action}"\n\tgroup_label: "{header}"\n\ttype: sum\n\tvalue_format: "@{{number_format}}"\n\tsql: ${{{field_name}}};;\n}}\n'
        lookml.append(dimension)
        lookml.append(measure)

    return "\n".join(lookml)

# Append the LookML script to the file
def append_date_to_file(file_path):
    with open(file_path, "a") as file:
        file.write(make_lookml() + "\n")

path = './my-file.txt'
append_date_to_file(path)