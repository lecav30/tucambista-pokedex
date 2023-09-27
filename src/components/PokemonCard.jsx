import { Card, CardContent, Button } from "@mui/material";

import { Link } from "react-router-dom";

export function PokemonCard({ children, name }) {
  return (
    <Card className="w-80">
      <CardContent className="flex flex-col items-center">
        <h1 className="text-xl mb-2">{children}</h1>
        <Link to={`/pokemon/${name}`}>
          <Button variant="outlined" color="error">
            More
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
