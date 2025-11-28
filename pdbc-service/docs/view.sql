CREATE OR REPLACE VIEW pdbc_entry_info AS
SELECT
  e.Structure_ID,
  SUM(e.formula_weight) AS molecular_weight,
  MAX(a.pdbx_PDB_model_num) AS deposited_model_count,
  COUNT(DISTINCT a.id) AS deposited_atom_count,
  IFNULL(d.disulf_count, 0) AS disulfide_bond_count,
  IFNULL(p.deposited_polymer_monomer_count, 0) AS deposited_polymer_monomer_count
FROM
  entity e
  INNER JOIN atom_site a ON e.Structure_ID = a.Structure_ID
  LEFT JOIN (
    SELECT
      sc.Structure_ID AS Structure_ID,
      COUNT(*) AS disulf_count
    FROM
      struct_conn sc
    WHERE
      sc.conn_type_id = 'disulf'
    GROUP BY
      sc.Structure_ID
  ) d ON e.Structure_ID = d.Structure_ID
  LEFT JOIN (
    SELECT
      Structure_ID,
      COUNT(*) AS deposited_polymer_monomer_count
    FROM
      pdbx_poly_seq_scheme
    GROUP BY
      Structure_ID
  ) p ON e.Structure_ID = p.Structure_ID
WHERE
  e.type != 'water'
GROUP BY
  e.Structure_ID;

---------

CREATE VIEW pdbc_chem_comp_info AS
SELECT
    `atom_site`.`Structure_ID` AS `Structure_ID`,
    `atom_site`.`label_comp_id` AS `label_comp_id`,
    COUNT(`atom_site`.`id`) AS `atom_count_heavy`
FROM
    `atom_site`
GROUP BY
    `atom_site`.`Structure_ID`,
    `atom_site`.`label_comp_id`;

---------

CREATE VIEW pdbc_polymer_entity AS
SELECT Structure_ID, SUM(formula_weight) AS formula_weight
FROM entity
WHERE type = 'polymer'
GROUP BY Structure_ID;
