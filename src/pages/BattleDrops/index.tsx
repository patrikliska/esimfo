import { TextField, Box, InputAdornment, Button, Paper } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { PriceTable } from '../../components/PriceTable';
import { getArrayOfUniqueValues } from '../../utils';

interface BattleDetail {
  damage: number;
  weapon: keyof WeaponType;
  berserk: boolean;
  defenderSide: boolean;
  militaryUnitBonus: number;
  citizenship: number;
  citizenId: number;
  localizationBonus: boolean;
  time: string;
  militaryUnit: number;
}

interface WeaponType {
  0: number;
  1: number;
  2: number;
  3: number;
  4: number;
  5: number;
}

interface FighterSummary {
  attackerDamage: number;
  avoidDamage: number;
  berserks: number;
  citizenId: number;
  citizenship: string;
  citizenshipId: number;
  defenderDamage: number;
  name: string;
  status: string;
  totalDamage: number;
  totalHits: number;
  totalHpNeeded: number;
  weaponsUsed: WeaponType;
}

export const BattleDrops = () => {
  const [fightersDetails, setFightersDetails] = useState<FighterSummary>();
  const [citizens, setCitizens] = useState<number[] | undefined>();
  const [citizensPage, setCitizensPage] = useState<number>(1);

  const citizensPerPage = 4;
  const pageTo = citizensPage * citizensPerPage;
  const pageFrom = pageTo - citizensPerPage;

  const fetchUsers = (selectedCitizens: number[]) => {
    if (!citizens) return;

    const citizensPromises = selectedCitizens.map(
      async (citizen) =>
        await axios.get(
          `https://chimera.e-sim.org/apiCitizenById.html?id=${citizen}`,
          {
            headers: {
              Accept: 'application/json',
              'Access-Control-Allow-Origin': '*',
              'Content-Type': 'application/json',
            },
          }
        )
    );

    axios
      .all(citizensPromises)
      .then((responses) => console.log('vysledek je', responses));
  };

  const getFightersDetails = async (data: BattleDetail[]) => {
    const uniqueCitizens = getArrayOfUniqueValues(data, 'citizenId');

    const selectedCitizens = uniqueCitizens.splice(pageFrom, pageTo);

    const citizensDetailsPromises = selectedCitizens.map(async (citizenId) => {
      let attackerDamage = 0;
      let berserks = 0;
      let defenderDamage = 0;
      let totalHits = 0;
      let totalHpNeeded = 0;
      let weaponsUsed: { [x: number]: number } = {
        0: 0,
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
      };

      const { citizenship, citizenshipId, login, status, eqAvoidDamage } =
        await axios
          .get(`https://chimera.e-sim.org/apiCitizenById.html?id=${citizenId}`)
          .then(({ data }) => data);

      data.forEach(
        ({
          berserk,
          citizenId: selectedCitizenId,
          damage,
          defenderSide,
          weapon,
        }: BattleDetail) => {
          if (citizenId === selectedCitizenId) {
            if (defenderSide) defenderDamage = defenderDamage + damage;
            else attackerDamage = attackerDamage + damage;

            if (berserk) {
              berserks++;
              totalHits = totalHits + 5;
              totalHpNeeded = totalHpNeeded + 50;
            } else {
              totalHits++;
              totalHpNeeded = totalHpNeeded + 10;
            }

            weaponsUsed = {
              ...weaponsUsed,
              [weapon]: (weaponsUsed[weapon] = berserk
                ? weaponsUsed[weapon] + 5
                : weaponsUsed[weapon] + 1),
            };
          }
        }
      );

      return {
        attackerDamage,
        avoidDamage: eqAvoidDamage,
        berserks,
        citizenId,
        citizenship,
        citizenshipId,
        defenderDamage,
        name: login,
        status,
        totalDamage: attackerDamage + defenderDamage,
        totalHits,
        weaponsUsed,
      };
    });

    const citizensDetails = await Promise.all(citizensDetailsPromises).then(
      (response) => response
    );

    console.log('citizensDetails', citizensDetails);

    setCitizens(uniqueCitizens);
  };

  const handleClick = () => {
    axios
      .get('https://chimera.e-sim.org/apiFights.html?battleId=7571')
      .then(({ data }) => getFightersDetails(data));
  };

  return (
    <Box
      sx={{ display: 'grid', gridTemplateColumns: 'repeat(10, 1fr)', gap: 1 }}
    >
      <TextField
        sx={{ gridColumn: '2 / 5' }}
        id='battleUrl'
        label='Enter battle url'
        variant='standard'
        required
      />
      <TextField
        sx={{ gridColumn: '5 / 7' }}
        id='battleDropsBonus'
        label='Battle drops bonus %'
        variant='standard'
      />
      <Button
        sx={{ gridColumn: '9 / 10' }}
        onClick={handleClick}
        fullWidth
        variant='contained'
      >
        Submit
      </Button>
      <Paper>dwadwad</Paper>
    </Box>
  );
};
