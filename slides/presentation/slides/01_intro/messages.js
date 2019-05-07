export const kustomizeFolderLayout = [
    { loc: [0, 26], title: 'Kustomize Folder Layout' },
    {
        loc: [1, 13],
        title: 'Bases',
        note: '"Bases" represent contextualized resources'
    },
    {
        loc: [1, 5],
        title: 'Backend',
        note:
        'All of the baseline backend deployment resources would be defined here'
    },
    {
        loc: [5, 9],
        title: 'Frontend',
        note:
        'All of the baseline frontend deployment resources would be defined here'
    },
    {
        loc: [9, 13],
        title: 'Database',
        note:
        'All related baseline resources for the mongoDB deployment would be defined here'
    },
    {
        loc: [13, 26],
        title: 'Overlays',
        note:
        'provides a mechanism to create variants or joinings and mutations of different bases'
    },
    {
        loc: [14, 16],
        title: 'Local Environment',
        note:
        'minimalist form of required resources to deploy given application'
    },
    {
        loc: [16, 21],
        title: 'Non-Production Environment',
        note:
        'Increase resource allocations and replica factors etc.'
    },
    {
        loc: [21, 26],
        title: 'Production Environment',
        note:
        'minimalist form of required resources to deploy given application'
    },
]
export const skaffoldConfig = [
    { loc: [0, 42], title: 'Skaffold Configuration' },
    {
        loc: [3, 8],
        title: 'Build',
        note:
        'All of the baseline backend deployment resources would be defined here'
    },
    {
        loc: [8, 9],
        title: 'Test',
        note:
        'All of the baseline backend deployment resources would be defined here'
    },
    {
        loc: [9, 13],
        title: 'Deploy',
        note:
        'All of the baseline backend deployment resources would be defined here'
    },
    {
        loc: [13, 24],
        title: 'Profiles',
        note:
        'All of the baseline backend deployment resources would be defined here'
    },
]