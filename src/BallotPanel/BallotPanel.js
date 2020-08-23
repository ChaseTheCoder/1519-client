import React from 'react';
import '../Panel/Panel.css';

export default function BallotPanel() {
    const ballot = {
        candidates: [
            "President and Vice President of the United States",
            "United States Senator (statewide for a 6-year term)",
            "Representatives in Congress (one in each district to a 2-year term) State Senators (to a 2-year term) in these districts that are partially or entirely in the City of Chicago: 1, 4, 7, 10, 11, 13, 16, 28",
            "Representatives in the General Assembly (one in each district to a 2-year term)",
            "Commissioners of the Metropolitan Water Reclamation District of Greater Chicago (3 to be 6-year terms)",
            "Clerk of the Circuit Court of Cook County (countywide to a 4-year term)",
            "State's Attorney of Cook County (countywide to a 4-year term)",
            "Commissioner of the Board of Review of Cook County (District 1 only)",
            "Illinois Supreme Court, Illinois Appellate Court, Cook County Circuit and Cook County Subcircuit Judges to fill vacancies"
        ],
        referendum: [
            "Proposed Fair-Tax Amendment to the Illinois Constitutional on whether to allow varying income-tax rates based on income levels",
            "Retention of Judges",
            "Three advisory (non-binding) citywide referenda on: expanding broadband internet service to all communities;",
            "Three advisory (non-binding) citywide referenda on: creating a citywide plan for growth and sustainability; and,",
            "Three advisory (non-binding) citywide referenda on: whether the state should regulate assault weapons or magazines that contain large quantities of ammunition"
        ]
    }

    return(
        <div className="panel">
            <p>{ ballot.candidates }</p>
            <p>{ ballot.referendum }</p>
        </div>
    );
}