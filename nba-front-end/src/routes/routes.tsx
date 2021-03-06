import React from "react";
import { Routes, Route } from "react-router-dom";
import BasePage from "../components/Base";
import DefaultPage from "../components/Default";
import LoginPage from "../components/loginPage/LoginPage";
import Dashboard from "../components/Menu";
import PlayerDataGridPage from '../components/playerDataGrid/playerDataGridPage';
import TeamDataGridPage from '../components/teamDataGrid/teamDataGridPage'
import TeamsPage from "../components/teamDataGrid/teamDataGridPage";

function RouteConfig() {
  return (
    <Routes>
        <Route path="/" element={<BasePage />}>
            <Route path="/" element={<DefaultPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="dashboard" element={<Dashboard />}>
                <Route path="players" element={<PlayerDataGridPage />} />
                <Route path="teams" element={<TeamDataGridPage />} />
            </Route>
            {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
            <Route path="*" element={<DefaultPage />} />
        </Route>
    </Routes>
  );
}

export default RouteConfig;


